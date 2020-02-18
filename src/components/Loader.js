//Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой готовый компонент, например react-loader-spinner или любой другой.

import React from "react";
import LoadIndicator from "react-loader-spinner";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return(
    <LoadIndicator
      type="Bars"
      color="#00BFFF"
      height={80}
      width={80}
    />
  )
}