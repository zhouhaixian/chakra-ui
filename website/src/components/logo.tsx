import { type HTMLChakraProps, chakra } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      height='8'
      width='auto'
      viewBox='0 0 998 257'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <chakra.path
        d='M388.5 115.302c17.612 0 25.466 11.424 28.084 21.658l24.752-9.044c-4.76-18.564-21.896-38.08-53.074-38.08-33.32 0-59.262 25.704-59.262 61.404 0 35.224 25.942 61.642 59.976 61.642 30.464 0 47.838-19.754 53.312-37.842l-24.276-8.806c-2.618 8.806-10.948 21.42-29.036 21.42-17.374 0-32.368-13.09-32.368-36.414s14.994-35.938 31.892-35.938zM484.894 141.244c.476-14.756 8.806-26.18 24.038-26.18 17.374 0 23.8 11.424 23.8 25.704v68.544h27.608v-73.304c0-25.466-13.804-45.934-42.364-45.934-12.138 0-25.228 4.284-33.082 14.518V37h-27.608v172.312h27.608v-68.068zM577.29 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L650.594 156v5.236c0 22.61-13.328 29.988-28.798 29.988zM810.108 93.406h-36.652l-44.506 46.886V37h-27.37v172.312h27.37v-32.368l14.28-14.994 34.034 47.362h33.796l-48.552-66.878 47.6-49.028zM889.349 92.692c-1.19-.238-4.046-.714-7.378-.714-15.232 0-28.084 7.378-33.558 19.992V93.406h-26.894v115.906h27.608v-55.216c0-21.658 9.758-34.034 31.178-34.034 2.856 0 5.95.238 9.044.714V92.692zM895.968 177.896c0 18.326 14.994 34.986 39.27 34.986 18.802 0 30.226-9.52 35.7-18.326 0 9.282.952 14.042 1.19 14.756h25.704c-.238-1.19-1.428-8.092-1.428-18.564v-57.596c0-23.086-13.566-43.316-49.266-43.316-28.56 0-46.648 17.85-48.79 37.842l25.228 5.712c1.19-11.662 9.282-20.944 23.8-20.944 15.232 0 21.896 7.854 21.896 17.612 0 4.046-1.904 7.378-8.568 8.33l-29.75 4.522c-19.754 2.856-34.986 14.28-34.986 34.986zm44.506 13.328c-10.948 0-16.898-7.14-16.898-14.994 0-9.52 6.902-14.28 15.47-15.708L969.272 156v5.236c0 22.61-13.328 29.988-28.798 29.988z'
        fill={{ base: '#2D3748', _dark: '#fff' }}
      />
      <rect width='257' height='257' rx='128.5' fill='url(#logo)' />
      <path
        d='M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z'
        fill='#fff'
      />
      <defs>
        <linearGradient
          id='logo'
          x1='128.5'
          x2='128.5'
          y2='257'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7BCBD4' />
          <stop offset='1' stopColor='#29C6B7' />
        </linearGradient>
      </defs>
    </chakra.svg>
  )
}

export const LogoIcon = (props: HTMLChakraProps<'svg'>) => {
  return (
    <chakra.svg
      height='8'
      width='auto'
      viewBox='0 0 257 257'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='257' height='257' rx='128.5' fill='url(#mark)' />
      <path
        d='M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z'
        fill='#fff'
      />
      <defs>
        <linearGradient
          id='mark'
          x1='128.5'
          x2='128.5'
          y2='257'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#7BCBD4' />
          <stop offset='1' stopColor='#29C6B7' />
        </linearGradient>
      </defs>
    </chakra.svg>
  )
}

export default Logo
