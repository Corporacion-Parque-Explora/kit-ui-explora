
export const Separator = ({ isRed, isYellow, isGreen, isBlue }) => (
    <div className={`separator ${isRed ? 'is-red' : isBlue ? 'is-blue' : isGreen ? 'is-green' : isYellow ? 'is-yellow' : ''}`}></div>
)
