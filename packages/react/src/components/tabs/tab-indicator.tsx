"use client"

import { cx } from "@chakra-ui/utils"
import { forwardRef } from "react"
import { type HTMLChakraProps, chakra } from "../../styled-system"
import { useTabsStyles } from "./tabs-context"
import { useTabIndicatorStyle } from "./use-tab-indicator-style"

export interface TabIndicatorProps extends HTMLChakraProps<"div"> {}

/**
 * TabIndicator
 *
 * Used to render an active tab indicator that animates between
 * selected tabs.
 */
export const TabIndicator = forwardRef<HTMLDivElement, TabIndicatorProps>(
  function TabIndicator(props, ref) {
    const indicatorStyle = useTabIndicatorStyle()
    const styles = useTabsStyles()

    return (
      <chakra.div
        ref={ref}
        {...props}
        className={cx("chakra-tabs__tab-indicator", props.className)}
        style={{ ...props.style, ...indicatorStyle }}
        css={[styles["indicator"], props.css]}
      />
    )
  },
)

TabIndicator.displayName = "TabIndicator"
