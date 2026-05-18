import { Routes, Route } from "react-router-dom";
import BrandSelection from "./BrandSelection";
import VibeInParty from "./VibeInParty";
import NeeralasKitchen from "./NeeralasKitchen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BrandSelection />} />
      <Route path="/vibeinparty" element={<VibeInParty />} />
      <Route path="/neeralas-kitchen" element={<NeeralasKitchen />} />
    </Routes>
  );
}
