import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";
import PostTransaction from "./pages/PostTransaction";
import AccountDetails from "./pages/AccountDetails";
import Statement from "./pages/Statement";
import Transation from "./pages/Tranaction";
import ContributionHistroy from "./pages/ContributionHistroy";
import PaymentHistroy from "./pages/PaymentHistroy";
import NewEmployee from "./pages/NewEmployee";
import NewVendor from "./pages/NewVendor";
import MyTask from "./pages/MyTask";
import MyTransaction from "./pages/MyTransaction";
import MyContribution from "./pages/MyContribution";
import MyPayment from "./pages/MyPayment";
import MemberSummary from "./pages/MemberSummary";
import AccountSummary from "./pages/AccountSummary";
import VendorSummary from "./pages/VendorSummary";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<PostTransaction />} />
          <Route path="/acc-Details" element={<AccountDetails />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/tranction" element={<Transation />} />
          <Route
            path="/contribution-histroy"
            element={<ContributionHistroy />}
          />
          <Route path="/Payment-histroy" element={<PaymentHistroy />} />
          <Route path="/New-emp" element={<NewEmployee />} />
          <Route path="/New-ven" element={<NewVendor />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/my-tranaction" element={<MyTransaction />} />
          <Route path="/my-contribution" element={<MyContribution />} />
          <Route path="/member-summary" element={<MemberSummary />} />
          <Route path="/acc-summary" element={<AccountSummary />} />
          <Route path="/ven-summary" element={<VendorSummary />} />
          <Route path="/my-payment" element={<MyPayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
