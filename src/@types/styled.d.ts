import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string,
    colors : {
      purple: string,
      red: string,
      subText: string,
      backGround: string,
      textColor: string,
      searchColorBack: string,
      lineColor: string
    }
  }
}