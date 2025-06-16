import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import CalculatorPage from "@/components/CalculatorPage";
import ThankYou from "@/components/ThankYou";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/thank-you" component={ThankYou} />
      </Switch>
      <Toaster />
    </>
  );
}
