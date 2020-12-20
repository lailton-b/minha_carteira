import React from 'react'

import ContentHeader from '../../components/ContentHeader';
import MessageBox from '../../components/MessageBox';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import Happy from '../../assets/happy.svg';
import Sad from '../../assets/sad.svg';
import Grinning from '../../assets/grinning.svg';
import Ops from '../../assets/ops.svg';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/listOfMonths';

import { Container, DashboardContent } from './styles';


const Dashboard: React.FC = () => {
  /****************************************
  * Month and year selected
  * List of months & years
  ******************/
  const [yearSelected, setYearSelected] = React.useState(() => new Date().getFullYear());
  const [monthSelected, setMonthSelected] = React.useState(() => new Date().getMonth() + 1);

  // List of months
  const months = React.useMemo(() => {
    const filtteredMonths = listOfMonths.filter((_, index) => {
      const date = new Date();
      const actualMonth = date.getMonth();

      return index <= actualMonth;
    });

    return filtteredMonths.map((month, index) => {
      return { label: month, value: index + 1 }
    })
  }, []);

  // List of years
  const years = React.useMemo(() => {
    const allRecords = [...expenses, ...gains];
    const years: number[] = [];

    allRecords.forEach((record) => {
      const year = new Date(record.date).getFullYear();

      return !years.includes(year) && years.push(year);
    });

    return years.map((year) => ({ label: year, value: year }));
  }, []);

  /*********************************
  * Wallet informations
  ***************/
  // Entries
  const entries = React.useMemo(() => {
    let total = 0;
    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected 
        ? total += Number(gain.amount)
        : null;
    });

    return total;
  }, [monthSelected, yearSelected]);

  // Exits
  const exits = React.useMemo(() => {
    let total = 0;
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected 
        ? total += Number(expense.amount)
        : null;
    });

    return total;
  }, [monthSelected, yearSelected]);

  // Total
  const total = React.useMemo(() => entries - exits, [entries, exits]);

  /*********************************
  * WalletCard Props
  ***************/
  const wallet = React.useMemo(() => {
    return [
      {
        title: "Saldo",
        color: "#4E41F0",
        amount: total,
        footerMessage: "Atualizado com base nas entradas e saídas",
        img: "dolar",
      },
      {
        title: "Entradas",
        color: "#F7931B",
        amount: entries,
        footerMessage: "Atualizado com base nas entradas",
        img: "arrowUp",
      },
      {
        title: "Saídas",
        color: "#E44C4E",
        amount: exits,
        footerMessage: "Atualizado com base nas saídas",
        img: "arrowDown",
      },
    ]
  }, [entries, exits, total]);

  /*********************************
  * MessageBox Props
  ***************/
  const messageBox = React.useMemo(() => {
    if (total > 0) {
      return {
        title: "Muito bem!",
        emoji: Happy,
        alt: "Happy",
        description: "Sua carteira está positiva!",
        footerMessage: "Continue assim. Considere investir o seu saldo."
      }
    } else if (total === 0 && entries > 0 && exits > 0) {
      return {
        title: "Ufaa!",
        emoji: Grinning,
        alt: "Grinning",
        description: "Você gastou exatamente o que ganhou.",
        footerMessage: "Essa foi por pouco, verifique se não está a gastar desnecessariamente."
      }
    } else if (total === 0 && entries === 0 && exits === 0) {
      return {
        title: "Oops!",
        emoji: Ops,
        alt: "Ops",
        description: "Nenhum registro foi encontrado nesse mês.",
        footerMessage: "Sua carteira não apresentou nenhum movimento nesse mês."
      }
    } else if (total < 0) {
      return {
        title: "Que triste!",
        emoji: Sad,
        alt: "Sad",
        description: "Você gastou mais do que ganhou.",
        footerMessage: "Esse mês ficou no vermelho. É hora de cortar gastos!"
      }
    }

    return {
      title: "Oops!",
      emoji: Ops,
      alt: "Ops",
      description: "Nenhum registro foi encontrado nesse mês.",
      footerMessage: "Sua carteira não apresentou nenhum movimento dessa vez."
    }
  }, [entries, exits, total]);

  /*********************************
  * PieChart Relations
  *******************/
  const relations = React.useMemo(() => {
    const total = entries + exits;
    const entriesPercentage = Number(((entries / total) * 100).toFixed(1));
    const exitsPercentage = Number(((exits / total) * 100).toFixed(1));

    return [
      {
        name: 'Entradas',
        amount: entries,
        percentage: isNaN(entriesPercentage) ? 0 : entriesPercentage,
        color: '#F7931B',
      },
      {
        name: 'Saídas',
        amount: exits,
        percentage: isNaN(exitsPercentage) ? 0 : exitsPercentage,
        color: '#E44C4E',
      }
    ]
  }, [entries, exits]);

  /*********************************
  * Data for HistoryBox
  *******************/
  const HistoryBoxData = React.useMemo(() => {
    const monthsGains: number[] = [];
    const monthsExpenses: number[] = [];
  
    listOfMonths.forEach((_, i) => {
      // Create a new value
      monthsGains.push(0);
      monthsExpenses.push(0);

      // monthsGains
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const month = date.getMonth();
        const year = date.getFullYear();

        if (month === i && year === yearSelected)
          return monthsGains[i] += Number(gain.amount);
      });

      // expensesGains
      expenses.forEach((gain) => {
        const date = new Date(gain.date);
        const month = date.getMonth();
        const year = date.getFullYear();

        if (month === i && year === yearSelected)
          return monthsExpenses[i] += Number(gain.amount);
      });
    })

    // Check if the current year is selected, and if so verify if
    // so returns only the months less than the actual month
    const listOfMonthsFilttered = listOfMonths.filter((month, i) => {
      const date = new Date();
      const actualYear = date.getFullYear();
      const actualMonth = date.getMonth();

      if (actualYear === yearSelected) return i <= actualMonth;
      else return [month];
    })

    // Return
    return listOfMonthsFilttered.map((month, i) => {
      return { 
        name: month.slice(0,3),
        Entradas: Number(monthsGains[i].toFixed(2)),
        Saídas: Number(monthsExpenses[i].toFixed(2))
      }
    })
  }, [yearSelected]);

  /*********************************
  * Data for BarChartBox
  *******************/
  // Entries
  const BarChartEntries = React.useMemo(() => {
    let recurrent = 0;
    let eventual = 0;

    gains.forEach(({ amount, frequency, date }) => {
      const formattedDate = new Date(date);
      const year = formattedDate.getFullYear();
      const month = formattedDate.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        return frequency === 'recorrente' 
          ? recurrent += Number(amount)
          : eventual += Number(amount)
      }
    })

    const recurrentPercent = Number((recurrent / (recurrent + eventual) * 100).toFixed(1));
    const eventualPercent = Number((eventual / (recurrent + eventual) * 100).toFixed(1));

    return [
      { 
        name: 'Recorrentes', 
        percentage: isNaN(recurrentPercent) ? 0 : recurrentPercent, 
        color: '#F7931B', 
        Total: recurrent 
      },
      { 
        name: 'Eventuais', 
        percentage: isNaN(eventualPercent) ? 0 : eventualPercent, 
        color: '#E44C4E', 
        Total: eventual 
      }
    ]
  }, [monthSelected, yearSelected]);

  // Exits
  const BarChartExits = React.useMemo(() => {
    let recurrent = 0;
    let eventual = 0;

    expenses.forEach(({ amount, frequency, date }) => {
      const formattedDate = new Date(date);
      const year = formattedDate.getFullYear();
      const month = formattedDate.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        return frequency === 'recorrente' 
          ? recurrent += Number(amount)
          : eventual += Number(amount)
      }
    })

    const recurrentPercent = Number((recurrent / (recurrent + eventual) * 100).toFixed(1));
    const eventualPercent = Number((eventual / (recurrent + eventual) * 100).toFixed(1));

    return [
      { 
        name: 'Recorrentes', 
        percentage: isNaN(recurrentPercent) ? 0 : recurrentPercent, 
        color: '#F7931B', 
        Total: recurrent 
      },
      { 
        name: 'Eventuais', 
        percentage: isNaN(eventualPercent) ? 0 : eventualPercent, 
        color: '#E44C4E', 
        Total: eventual 
      }
    ]
  }, [monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B" >
        <SelectInput
          options={ months } 
          value={ monthSelected } 
          onChange={({ target }) => setMonthSelected(Number(target.value))} 
        />
        <SelectInput 
          options={ years } 
          value={ yearSelected } 
          onChange={({ target }) => setYearSelected(Number(target.value))} 
        />
      </ContentHeader>

      <DashboardContent>
        {
          wallet.map(({ title, color, amount, footerMessage, img }) => (
            <WalletBox
              key={ title }
              title={ title } 
              color={ color }
              amount={ amount }
              footerMessage={ footerMessage }
              img={ img }
            />
          ))
        }

        <MessageBox 
          title={ messageBox.title } 
          emoji={ messageBox.emoji }
          alt={ messageBox.alt }
          description={ messageBox.description }
          footerMessage={ messageBox.footerMessage }
        />

        <PieChartBox relations={ relations } />

        <HistoryBox data={ HistoryBoxData } />

        <BarChartBox
          title="Saídas" 
          data={BarChartExits} 
        />

        <BarChartBox
          title="Entradas"
          data={BarChartEntries} 
        />
      </DashboardContent>
    </Container>
  )
}

export default Dashboard
