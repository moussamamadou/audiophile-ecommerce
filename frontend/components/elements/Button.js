import classNames from "classnames"

const Button = ({ button, appearance, handleClick, type }) => {
  return (
    <button link={button} onClick={handleClick} type={type}>
      <div
        className={classNames(
          // Common classes
          "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md",
          // Full-size button
          // Specific to when the button is fully dark
          {
            "bg-primary-600 text-white border-primary-600":
              appearance === "dark",
          },
          // Specific to when the button is dark outlines
          {
            "text-primary-600 border-primary-600":
              appearance === "dark-outline",
          },
          // Specific to when the button is fully white
          {
            "bg-white text-primary-600 border-white": appearance === "white",
          },
          // Specific to when the button is white outlines
          {
            "text-white border-white": appearance === "white-outline",
          }
        )}
      >
        {button.text}
      </div>
    </button>
  )
}

export default Button
