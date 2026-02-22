interface Props {
  onClick?: () => void
}

export default function ConfirmButton({ onClick }: Props) {
  return (
    <button
      type="button"   // 👈 เพิ่มบรรทัดนี้
      onClick={onClick}
      className="
        mt-1
        w-[220px]
        h-[55px]
        rounded-full
        text-white
        font-semibold
        text-lg
        bg-gradient-to-r from-[#FF3D00] to-[#ECDB46]
        hover:from-green-500 hover:to-green-500
        transition-all
        duration-300
      "
    >
      Confirm
    </button>
  )
}