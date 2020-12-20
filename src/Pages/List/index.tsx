import React from 'react'
import { useParams } from 'react-router-dom';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formattedDate from '../../utils/formattedDate';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import listOfMonths from '../../utils/listOfMonths';

import formattedCurrency from '../../utils/formattedCurrency';
import ListCard from '../../components/ListCard';

import { Container, ListContent, Filters, ListCardWrapper, NothingFound } from './styles';

interface IData {
  name: string;
  labelColor: string;
  formattedDate: string;
  formattedAmount: string;
}

const List: React.FC = () => {
  /****************************************************
  * Infos about the type of list > gains or expenses
  *********************/
  const { type }: { type: string } = useParams();

  const [data, setData] = React.useState<IData[]>([])

  const list = React.useMemo(() => {
    return type === 'entradas'
    ? { title: 'Entradas', lineColor: '#4E41F0', records: gains }
    : { title: 'Saídas', lineColor: '#E44C4E', records: expenses }
  }, [type]);

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
    const years: number[] = [];

    list.records.forEach((record) => {
      const year = new Date(record.date).getFullYear();

      return !years.includes(year) && years.push(year);
    });

    return years.map((year) => ({ label: year, value: year }));
  }, [list.records]);

  /************************************************
  * Frequency filter
  ************************/
  const [recorrenteFilter, setRecorrenteFilter] = React.useState(true);
  const [eventualFilter, setEventualFilter] = React.useState(true);

  const frequencyFilter = React.useMemo(() => {
    if (recorrenteFilter && eventualFilter) return ['recorrente', 'eventual'];
    else if (recorrenteFilter) return ['recorrente'];
    else if (eventualFilter) return ['eventual'];
    else return [''];
  }, [recorrenteFilter, eventualFilter]);

  /***********************************************************
  * Setting records inside const data with formatted values
  * accordingly to the month and year selected
  ***********************/
  React.useEffect(() => {
    const filteredRecords = list.records.filter((record) => {
      const date = new Date(record.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === monthSelected && year === yearSelected && frequencyFilter.includes(record.frequency);
    });

    const formattedRecords = filteredRecords.map(({ description, date, frequency, amount }) => {
      return {
        name: description,
        labelColor: frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
        formattedDate: formattedDate(date),
        formattedAmount: formattedCurrency(amount)
      }
    })

    setData(formattedRecords);

  }, [monthSelected, yearSelected, list.records, frequencyFilter]); 

  return (
    <Container>
      <ContentHeader title={ list.title } lineColor={ list.lineColor }>
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

      <ListContent>
        <Filters className="primary_color">
          <label htmlFor="recorrentes" id="recorrentes_label" className={!recorrenteFilter ? 'disabledFilter' : ''}>
            Recorrentes
          </label>
          <input 
            type="checkbox" 
            id="recorrentes" 
            onChange={() => setRecorrenteFilter((value) => !value)} 
            value="recorrente"
            checked 
          />

          <label htmlFor="eventuais" id="eventuais_label" className={!eventualFilter ? 'disabledFilter' : ''}>
            Eventuais
          </label>
          <input 
            type="checkbox" 
            id="eventuais" 
            onChange={() => setEventualFilter((value) => !value)} 
            value="eventual"
            checked 
          />
        </Filters>

        <ListCardWrapper>
          { data.length
            ? (
              data.map(({ name, labelColor, formattedDate, formattedAmount }, index) => (
                <ListCard 
                  key={name + index}
                  name={ name } 
                  labelColor={ labelColor } 
                  formattedDate={ formattedDate } 
                  formattedAmount={ formattedAmount } 
                />
              ))
            )
            : (
              <NothingFound className="primary_color">Nenhum registro encontrado 🤒</NothingFound>
            )
          }
        </ListCardWrapper>
      </ListContent>
    </Container>
  )
}

export default List;
