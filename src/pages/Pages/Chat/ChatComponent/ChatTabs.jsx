import { useState } from "react";
import PillTab from "./PillTab";

const ChatTabs = () => {
  const [tab, setTab] = useState("App");
  return (
    <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible">
      {["App", "Message", "Setting"].map((label) => (
        <PillTab
          key={label}
          label={label}
          active={tab === label}
          onClick={() => setTab(label)}
        />
      ))}
    </div>
  );
};

export default ChatTabs