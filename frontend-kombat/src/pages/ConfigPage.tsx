import ConfirmButton from "../components/ConfirmButton"
import ConfigBoard from "../components/ConfigBoard"
import bg from "../assets/images/background-config.png"
import logo from "../assets/images/logo.png"

interface Props {
  onBack: () => void
  onConfirm: () => void
}

export default function ConfigPage({ onBack, onConfirm }: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Background */}
      <img
        src={bg}
        alt="config background"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        draggable={false}
      />

      {/* Dark overlay */}
     <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="mt-[80px] w-[120px] md:w-[160px] select-none"
          draggable={false}
        />

        {/* Title */}
       <h1
  className="
    text-4xl md:text-5xl
    font-extrabold
    tracking-widest
    bg-[radial-gradient(circle,#FFFFFF_0%,#FFB300_60%,#FFB300_100%)]
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_12px_rgba(255,179,0,0.6)]
    mt-5 mb-1
  "
>
  CONFIG
</h1>

        {/* Board */}
        <div className="w-[95%] max-w-[750px]">
          <ConfigBoard>
            <div className="text-yellow-400 text-base md:text-xl space-y-2 font-medium">
              <p>spawn_cost = 100</p>
              <p>hex_purchase_cost = 1000</p>
              <p>init_budget = 10000</p>
              <p>init_hp = 100</p>
              <p>turn_budget = 90</p>
              <p>max_budget = 23456</p>
              <p>interest_pct = 5</p>
              <p>max_turns = 69</p>
              <p>max_spawns = 47</p>
            </div>
          </ConfigBoard>
        </div>

        {/* Confirm Button */}
        <div className="mt-10 mb-20">
          <ConfirmButton onClick={onConfirm} />
        </div>

      </div>

      {/* Back Button */}
    <button
  onClick={onBack}
  className="absolute top-10 left-6 z-20"
>
  <div className="
    w-8 h-8
    md:w-8 md:h-8
    rounded-full
    bg-[linear-gradient(90deg,#FF3D00,#ECDB46)]
    flex items-center justify-center
    shadow-md
    hover:scale-105
    transition-all duration-200
  ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 md:w-5 md:h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
</button>

    </div>
  )
}