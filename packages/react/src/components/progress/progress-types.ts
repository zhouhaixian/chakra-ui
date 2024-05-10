import type { ProgressPropsReturn } from "./progress-utils"

export interface ProgressOptions {
  /**
   * The `value` of the progress indicator.
   * If `undefined` the progress bar will be in `indeterminate` state
   */
  value?: number
  /**
   * The minimum value of the progress
   * @default 0
   */
  min?: number
  /**
   * The maximum value of the progress
   * @default 100
   */
  max?: number
  /**
   * If `true`, the progress will be indeterminate and the `value`
   * prop will be ignored
   *
   * @default false
   */
  indeterminate?: boolean
}

export interface ProgressContext extends ProgressOptions {
  computed: ProgressPropsReturn
}
