import { createGlobalStyle } from "styled-components"
import contactImg from "../../assets/images/contact.jpg"
import aboutImg from "../../assets/images/about.jpg"

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Poppins:ital,wght@1,800&family=Righteous&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.about {
  text-align: center;
  background: url(${aboutImg}) center center/cover no-repeat;
  padding: 12rem calc((100vw - 1300px) / 2);
  width: 100%;
  font-size: 5rem;
  color: #fff;
  font-family: "PT Sans Caption", sans-serif;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact {
  text-align: center;
  background: url(${contactImg}) center center/cover
    no-repeat;
  padding: 12rem calc((100vw - 1300px) / 2);
  width: 100%;
  font-size: 5rem;
  color: #fff;
  font-family: "PT Sans Caption", sans-serif;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
export default GlobalStyles
