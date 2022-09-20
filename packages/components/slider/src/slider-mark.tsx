import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import { useSliderContext, useSliderStyles } from "./slider"

export interface SliderMarkProps extends HTMLChakraProps<"div"> {
  value: number
}

/**
 * SliderMark is used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
export const SliderMark = forwardRef<SliderMarkProps, "div">((props, ref) => {
  const { getMarkerProps } = useSliderContext()
  const styles = useSliderStyles()
  const markProps = getMarkerProps(props, ref)
  return (
    <chakra.div
      {...markProps}
      className={cx("chakra-slider__marker", props.className)}
      __css={styles.mark}
    />
  )
})

SliderMark.displayName = "SliderMark"
