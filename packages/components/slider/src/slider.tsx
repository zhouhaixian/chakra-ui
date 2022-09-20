import { createContext } from "@chakra-ui/react-context"
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  useTheme,
} from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import { useSlider, UseSliderProps, UseSliderReturn } from "./use-slider"

interface SliderContext
  extends Omit<UseSliderReturn, "getInputProps" | "getRootProps"> {}

const [SliderProvider, useSliderContext] = createContext<SliderContext>({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />",
})

const [SliderStylesProvider, useSliderStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `SliderStylesContext`,
  hookName: `useSliderStyles`,
  providerName: "<Slider />",
})

export { useSliderStyles }
export { SliderProvider, useSliderContext }

export interface SliderProps
  extends UseSliderProps,
    ThemingProps<"Slider">,
    Omit<HTMLChakraProps<"div">, keyof UseSliderProps> {}

/**
 * The Slider is used to allow users to make selections from a range of values.
 * It provides context and functionality for all slider components
 *
 * @see Docs     https://chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/slider/
 */
export const Slider = forwardRef<SliderProps, "div">((props, ref) => {
  const styles = useMultiStyleConfig("Slider", props)
  const ownProps = omitThemingProps(props)
  const { direction } = useTheme()
  ownProps.direction = direction

  const { getInputProps, getRootProps, ...context } = useSlider(ownProps)

  const rootProps = getRootProps()
  const inputProps = getInputProps({}, ref)

  return (
    <SliderProvider value={context}>
      <SliderStylesProvider value={styles}>
        <chakra.div
          {...rootProps}
          className={cx("chakra-slider", props.className)}
          __css={styles.container}
        >
          {props.children}
          <input {...inputProps} />
        </chakra.div>
      </SliderStylesProvider>
    </SliderProvider>
  )
})

Slider.defaultProps = {
  orientation: "horizontal",
}

Slider.displayName = "Slider"
