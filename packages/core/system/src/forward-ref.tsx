/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 */
import { forwardRef as forwardReactRef, ForwardRefRenderFunction } from "react"
import { As, ComponentWithAs } from "./system.types"

export function forwardRef<Props, Component extends As>(
  component: ForwardRefRenderFunction<any, Props>,
) {
  return forwardReactRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >
}
