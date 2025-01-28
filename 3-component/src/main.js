import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import App2 from "./App2.js";
import * as Sentry from "@sentry/react";
import {SeverityLevel} from "@sentry/types";
import packageJson from '../package.json';
import "../tailwind.css";

const { sentryDSN, version, environment } = packageJson;

Sentry.init({
    dsn: sentryDSN,
    release: version,
    environment: environment,
    normalizeDepth: 6,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", "localhost:8080"],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    SeverityLevel: SeverityLevel,
});

ReactDOM.render(<App2 />, document.querySelector("#app"));
