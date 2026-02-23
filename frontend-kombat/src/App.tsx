import { useState } from "react"

import GameWrapper from "./components/GameWrapper"
import StartPage from "./pages/StartPage"
import ConfigPage from "./pages/ConfigPage"
import ModePage from "./pages/ModePage"
import MinionTypePage from "./pages/MinionTypePage"
import SelectCharacterPage from "./pages/SelectCharacterPage"

import { setMode } from "./api/gameApi"

function App() {
  const [page, setPage] = useState<
    | "start"
    | "config"
    | "mode"
    | "minionType"
    | "selectUI"
    | "minionSetup"
  >("start")

  // -------------------- MODE --------------------
  const handleModeConfirm = async (
    mode: "DUEL" | "SOLITAIRE" | "AUTO"
  ) => {
    try {
      console.log("Sending mode:", mode)

      const result = await setMode(mode)

      console.log("Backend response:", result)

      // ไปหน้าเลือกจำนวน Minion Type
      setPage("minionType")

    } catch (error) {
      console.error("Error:", error)
      alert("Failed to connect backend")
    }
  }

  return (
    <GameWrapper>

      {/* -------------------- START -------------------- */}
      {page === "start" && (
        <StartPage
          onConfig={() => setPage("config")}
          onStart={() => setPage("mode")}
        />
      )}

      {/* -------------------- CONFIG -------------------- */}
      {page === "config" && (
        <ConfigPage
          onBack={() => setPage("start")}
          onConfirm={() => setPage("mode")}
        />
      )}

      {/* -------------------- MODE -------------------- */}
      {page === "mode" && (
        <ModePage
          onBack={() => setPage("start")}
          onConfirm={handleModeConfirm}
        />
      )}

      {/* -------------------- MINION TYPE -------------------- */}
      {page === "minionType" && (
        <MinionTypePage
          onBack={() => setPage("mode")}
          onConfirm={(minionType) => {
            console.log("Selected Minion Type:", minionType)
            setPage("selectUI")
          }}
        />
      )}

      {/* -------------------- SELECT CHARACTER -------------------- */}
      {page === "selectUI" && (
        <SelectCharacterPage
          onBack={() => setPage("minionType")}
          onConfirm={(uiType) => {
            console.log("Selected UI:", uiType)
            setPage("minionSetup")
          }}
        />
      )}

      {/* -------------------- MINION SETUP -------------------- */}
      {page === "minionSetup" && (
        <div className="text-white text-3xl">
          MINION SETUP PAGE (ยังไม่ได้สร้าง)
        </div>
      )}

    </GameWrapper>
  )
}

export default App