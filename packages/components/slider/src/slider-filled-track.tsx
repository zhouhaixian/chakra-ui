import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import { useSliderContext, useSliderStyles } from "./slider"

export interface SliderInnerTrackProps extends HTMLChakraProps<"div"> {}

export const SliderFilledTrack = forwardRef<SliderInnerTrackProps, "div">(
  (props, ref) => {
    const { getInnerTrackProps } = useSliderContext()
    const styles = useSliderStyles()
    const trackProps = getInnerTrackProps(props, ref)

    return (
      <chakra.div
        {...trackProps}
        className={cx("chakra-slider__filled-track", props.className)}
        __css={styles.filledTrack}
      />
    )
  },
)

SliderFilledTrack.displayName = "SliderFilledTrack"
