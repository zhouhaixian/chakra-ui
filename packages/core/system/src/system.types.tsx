import type {
  ResponsiveValue,
  SystemProps,
  SystemStyleObject,
} from "@chakra-ui/styled-system"
import type { Interpolation } from "@emotion/react"
import {
  ComponentPropsWithoutRef,
  ComponentProps,
  ElementType,
  ValidationMap,
  WeakValidationMap,
} from "react"

export interface ChakraProps extends SystemProps {
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>
  /**
   * Used for internal css management
   * @private
   */
  __css?: SystemStyleObject
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject
  /**
   * The emotion's css style object
   */
  css?: Interpolation<{}>
}

export type As<Props = any> = ElementType<Props>

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As
}

export type Assign<Destination, Source> = Omit<Destination, keyof Source> &
  Source

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<
  Target,
  "transition" | "as" | "color" | "translate" | OmitAdditionalProps
> & {
  htmlTranslate?: "yes" | "no" | undefined
}

export type RightJoinProps<
  SourceProps = Record<never, never>,
  OverrideProps = Record<never, never>,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps

export type MergeWithAs<
  ComponentProps,
  AsProps,
  AdditionalProps = Record<never, never>,
  AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent
  }

export type ComponentWithAs<
  Component extends As,
  Props = Record<never, never>,
> = {
  <AsComponent extends As = Component>(
    props: RightJoinProps<ComponentProps<Component>, Props> &
      RightJoinProps<ComponentProps<AsComponent>, Props> & {
        as?: AsComponent
      },
  ): JSX.Element

  displayName?: string
  propTypes?: WeakValidationMap<any>
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export interface ChakraComponent<T extends As, P = Record<never, never>>
  extends ComponentWithAs<T, ChakraProps & P> {}
