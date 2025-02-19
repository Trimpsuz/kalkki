import { useState, useRef } from 'preact/hooks'
import Decimal from 'decimal.js';
import Logo from './components/Logo';
import HistoryLine, { HistoryLineData } from './components/HistoryLine';
import './app.scss'
import { useObjectState } from './use-object-state';
import MathInput from './components/MathInput';

export type AppState = {
  answer: Decimal;
  ind: Decimal;
  answers: HistoryLineData[];
  extraInfo: string | null;
  latex: boolean;
}

export function App() {
  const [appState, setAppState] = useObjectState<AppState>({
    answer: new Decimal(0),
    ind: new Decimal(0),
    answers: [],
    extraInfo: null,
    latex: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div class="history">
        <div className={`welcome-message${appState.answers.length > 0 ? ' hidden' : ''}`}>
          <Logo height="128" width="128" />
          <h1>Abikalkki</h1>
          <p>Tervetuloa käyttämään Abikalkkia!</p>
          <p>Aloita kirjoittamalla lauseke alla olevaan kenttään.</p>
          <p class="hide-pwa-prompt">Tietokoneella parhaan kokemuksen saat <span id="pwa-install-prompt" hidden><a href="#" onClick={() => (window as any).installPWA()}>asentamalla sen PWA-sovelluksena</a> tai </span><a href="/app">iframe-tilassa</a>.</p>
        </div>
        {appState.answers.map((line, index) => <HistoryLine key={`line-${index}`} inputRef={inputRef} {...line} />)}
      </div>
      <MathInput inputRef={inputRef} state={appState} setState={setAppState} />
    </>
  )
}
