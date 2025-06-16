import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import CalculatorPage from "@/components/CalculatorPage";
import ThankYou from "@/components/ThankYou";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
      </Switch>
      <Toaster />
    </>
  );
}
