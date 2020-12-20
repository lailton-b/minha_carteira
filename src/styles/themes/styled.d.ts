import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      
      white: string,
      black: string,
      grey: string,
      secondary_color: string,
  
      success: string,
      info: string,
      warning: string
    }
  }
}