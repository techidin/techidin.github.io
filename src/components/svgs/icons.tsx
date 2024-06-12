// Youtube
export const YoutubeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        stroke="currentColor"
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
      />
      <path stroke="currentColor" d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export const Linkedin = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 425 512"
      fill="none"
      className={className}
    >
      <path
        d="M317 51q21.5 0 40.5 8.25t33.25 22.5 22.5 33.25 8.25 40.5v209q0 21.5-8.25 40.75t-22.5 33.5-33.25 22.5-40.5 8.25H107.5q-21.5 0-40.5-8.25t-33.25-22.5-22.5-33.5T3 364.5v-209Q3 134 11.25 115t22.5-33.25T67 59.25 107.5 51H317zM147 208H94.5v170H147V208zm-26-13.5q10.5 0 18.25-7.5t7.75-18.5-7.75-18.5-18.25-7.5q-11 0-18.75 7.5t-7.75 18.5 7.75 18.5 18.75 7.5zm209 85q0-18-10-35.25T294 218q-14.5-8-33.75-8.5T225.5 216v-8H173v170h52.5V274l21.5-10.5q4-2 11-2t10.5 2.5q3 1.5 6 6.5t3 9V378H330v-98.5z"
        fill="currentColor"
      />
    </svg>
  )
}

// Instagram
export const Instagram = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 22 22" fill="none" className={className}>
      <path
        d="M11 0C8.01167 0 7.63858 0.01375 6.46525 0.066C5.29375 0.121 4.49625 0.30525 3.795 0.5775C3.07175 0.858 2.45758 1.23475 1.84617 1.84617C1.23475 2.45758 0.857083 3.07083 0.5775 3.795C0.30525 4.49625 0.120083 5.29375 0.066 6.46525C0.011 7.63858 0 8.01167 0 11C0 13.9883 0.01375 14.3614 0.066 15.5348C0.121 16.7053 0.30525 17.5038 0.5775 18.205C0.858 18.9273 1.23475 19.5424 1.84617 20.1538C2.45758 20.7643 3.07083 21.1429 3.795 21.4225C4.49717 21.6938 5.29467 21.8799 6.46525 21.934C7.63858 21.989 8.01167 22 11 22C13.9883 22 14.3614 21.9863 15.5348 21.934C16.7053 21.879 17.5038 21.6938 18.205 21.4225C18.9273 21.142 19.5424 20.7643 20.1538 20.1538C20.7643 19.5424 21.1429 18.9301 21.4225 18.205C21.6938 17.5038 21.8799 16.7053 21.934 15.5348C21.989 14.3614 22 13.9883 22 11C22 8.01167 21.9863 7.63858 21.934 6.46525C21.879 5.29467 21.6938 4.49533 21.4225 3.795C21.142 3.07175 20.7643 2.45758 20.1538 1.84617C19.5424 1.23475 18.9301 0.857083 18.205 0.5775C17.5038 0.30525 16.7053 0.120083 15.5348 0.066C14.3614 0.011 13.9883 0 11 0ZM11 1.98C13.9361 1.98 14.2863 1.99467 15.4458 2.04508C16.5183 2.0955 17.1004 2.27333 17.4873 2.4255C18.0024 2.62442 18.3673 2.86275 18.7541 3.24683C19.1382 3.63183 19.3765 3.99758 19.5754 4.51275C19.7258 4.89958 19.9054 5.48167 19.954 6.55417C20.0063 7.71467 20.0182 8.063 20.0182 11C20.0182 13.937 20.0044 14.2863 19.9503 15.4458C19.8944 16.5183 19.7157 17.1004 19.5644 17.4873C19.3591 18.0024 19.1253 18.3673 18.7403 18.7541C18.3563 19.1382 17.985 19.3765 17.4753 19.5754C17.0903 19.7258 16.4991 19.9054 15.4266 19.954C14.2588 20.0063 13.915 20.0182 10.9725 20.0182C8.02908 20.0182 7.68533 20.0044 6.51842 19.9503C5.445 19.8944 4.85375 19.7157 4.46875 19.5644C3.94717 19.3591 3.58875 19.1253 3.20467 18.7403C2.81875 18.3563 2.57217 17.985 2.37967 17.4753C2.22842 17.0903 2.05058 16.4991 1.99467 15.4266C1.95342 14.2716 1.93875 13.915 1.93875 10.9862C1.93875 8.05658 1.95342 7.69908 1.99467 6.53033C2.05058 5.45783 2.22842 4.8675 2.37967 4.4825C2.57217 3.96 2.81875 3.6025 3.20467 3.21658C3.58875 2.8325 3.94717 2.585 4.46875 2.39342C4.85375 2.24125 5.43217 2.0625 6.50467 2.0075C7.67342 1.96625 8.01717 1.9525 10.9588 1.9525L11 1.98ZM11 5.3515C7.87875 5.3515 5.3515 7.8815 5.3515 11C5.3515 14.1213 7.8815 16.6485 11 16.6485C14.1213 16.6485 16.6485 14.1185 16.6485 11C16.6485 7.87875 14.1185 5.3515 11 5.3515ZM11 14.6667C8.97417 14.6667 7.33333 13.0258 7.33333 11C7.33333 8.97417 8.97417 7.33333 11 7.33333C13.0258 7.33333 14.6667 8.97417 14.6667 11C14.6667 13.0258 13.0258 14.6667 11 14.6667ZM18.1922 5.12875C18.1922 5.8575 17.6 6.44875 16.8722 6.44875C16.1434 6.44875 15.5522 5.85658 15.5522 5.12875C15.5522 4.40092 16.1443 3.80967 16.8722 3.80967C17.5991 3.80875 18.1922 4.40092 18.1922 5.12875Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Github
export const Github = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 22 22" fill="none" className={className}>
      <path
        d="M11 0C4.9225 0 0 5.0503 0 11.2793C0 16.2638 3.1515 20.4907 7.52125 21.9805C8.07125 22.0867 8.27292 21.738 8.27292 21.4382C8.27292 21.1703 8.26375 20.4606 8.25917 19.5207C5.19933 20.2012 4.554 18.0074 4.554 18.0074C4.0535 16.7056 3.33025 16.3578 3.33025 16.3578C2.33383 15.6585 3.40725 15.6726 3.40725 15.6726C4.51183 15.7515 5.09208 16.8343 5.09208 16.8343C6.07292 18.5591 7.667 18.061 8.29583 17.7724C8.39483 17.043 8.67808 16.5458 8.9925 16.2638C6.54958 15.9818 3.982 15.0118 3.982 10.6899C3.982 9.45862 4.40825 8.45289 5.11408 7.66334C4.99033 7.37853 4.61908 6.23181 5.21033 4.67808C5.21033 4.67808 6.13158 4.37542 8.23533 5.83421C9.11533 5.58325 10.0503 5.45918 10.9853 5.45354C11.9203 5.45918 12.8553 5.58325 13.7353 5.83421C15.8253 4.37542 16.7466 4.67808 16.7466 4.67808C17.3378 6.23181 16.9666 7.37853 16.8566 7.66334C17.5578 8.45289 17.9841 9.45862 17.9841 10.6899C17.9841 15.0231 15.4128 15.9771 12.9653 16.2544C13.3503 16.5928 13.7078 17.2846 13.7078 18.3411C13.7078 19.8506 13.6941 21.0631 13.6941 21.4297C13.6941 21.7258 13.8866 22.0783 14.4503 21.9655C18.8512 20.486 22 16.2563 22 11.2793C22 5.0503 17.0748 0 11 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

// X
export const X = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

// Email
export const Email = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 20 16" fill="none" className={className}>
      <path
        d="M20 2.90909V3.0623L10.7486 8.85915C10.5234 9.00017 10.2643 9.07483 10 9.07483C9.73568 9.07483 9.47655 9.00017 9.25143 8.85915L0 3.0623V2.90909C0 2.13755 0.30102 1.39761 0.836838 0.852053C1.37266 0.306493 2.09938 0 2.85714 0H17.1429C17.9006 0 18.6273 0.306493 19.1632 0.852053C19.699 1.39761 20 2.13755 20 2.90909Z"
        fill="currentColor"
      />
      <path
        d="M0 13.0909V4.77091L6.30277 8.71923L2.56413 11.3897C2.22707 11.6304 2.149 12.0989 2.38976 12.4359C2.63051 12.773 3.09893 12.851 3.43599 12.6103L7.67766 9.58052L8.50286 10.0975C8.9531 10.3795 9.47137 10.5288 10 10.5288C10.5286 10.5288 11.0469 10.3795 11.4971 10.0975L12.3224 9.58048L16.5641 12.6103C16.9012 12.851 17.3696 12.773 17.6104 12.4359C17.8511 12.0989 17.773 11.6304 17.436 11.3897L13.6973 8.71919L20 4.77091V13.0909C20 13.8624 19.699 14.6024 19.1632 15.1479C18.6273 15.6935 17.9006 16 17.1429 16H2.85714C2.09938 16 1.37266 15.6935 0.836838 15.1479C0.30102 14.6024 0 13.8624 0 13.0909Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Labs
export const Labs = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 17 16" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.69968 1.52865V6.17265C6.69968 6.90165 6.40968 7.60065 5.89468 8.11665L4.67768 9.33265C5.89128 9.29107 7.10025 9.50256 8.22768 9.95365L8.72968 10.1546C10.056 10.6853 11.5095 10.8122 12.9077 10.5196L10.5047 8.11665C9.98925 7.60098 9.6997 6.90174 9.69968 6.17265V1.52865C8.70003 1.49133 7.69933 1.49133 6.69968 1.52865ZM11.1997 1.61265L11.3897 1.62765C11.4887 1.63719 11.5887 1.62694 11.6837 1.59747C11.7787 1.56801 11.867 1.51993 11.9432 1.45604C12.0195 1.39214 12.0823 1.31371 12.128 1.22531C12.1736 1.1369 12.2013 1.0403 12.2092 0.941115C12.2172 0.841933 12.2053 0.742159 12.1744 0.647604C12.1434 0.553049 12.0939 0.465603 12.0288 0.39036C11.9637 0.315117 11.8843 0.253581 11.7951 0.209336C11.706 0.165091 11.609 0.139022 11.5097 0.132648C9.30655 -0.044216 7.0928 -0.044216 4.88968 0.132648C4.69375 0.151531 4.5131 0.246682 4.3867 0.397571C4.2603 0.54846 4.19828 0.742992 4.21403 0.939196C4.22978 1.1354 4.32203 1.31755 4.47088 1.44635C4.61973 1.57514 4.81325 1.64026 5.00968 1.62765L5.19968 1.61265V6.17265C5.19968 6.50365 5.06768 6.82165 4.83368 7.05565L0.799677 11.0906C-0.696323 12.5866 -0.017323 15.2406 2.20268 15.5656C4.16068 15.8526 6.16268 16.0006 8.19968 16.0006C10.2367 16.0006 12.2387 15.8526 14.1967 15.5646C16.4167 15.2396 17.0967 12.5856 15.5997 11.0896L11.5657 7.05565C11.3315 6.82143 11.1999 6.50385 11.1997 6.17265V1.61265Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Fire
export const Fire = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 15 17" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4995 3.22847C12.735 3.94219 13.7229 5.01642 14.3309 6.30727C14.9388 7.59811 15.1378 9.04392 14.9011 10.451C14.6644 11.8581 14.0034 13.1592 13.0065 14.1801C12.0097 15.201 10.7247 15.8929 9.32372 16.1631C7.9227 16.4334 6.47256 16.269 5.16756 15.692C3.86257 15.1151 2.76505 14.1531 2.02204 12.935C1.27903 11.7169 0.926005 10.3008 1.01027 8.87643C1.09453 7.45208 1.61205 6.08749 2.4935 4.96547C2.6955 4.70847 3.0835 4.74747 3.2865 5.00447C3.5645 5.35647 3.8805 5.67647 4.2295 5.95847C4.5615 6.22747 5.0155 5.90947 5.0025 5.48247C4.97057 4.53036 5.16669 3.58441 5.5745 2.72347C6.10823 1.59984 6.97663 0.668918 8.0605 0.0584723C8.3075 -0.0815277 8.6105 0.0424723 8.7375 0.296472C9.34939 1.52444 10.3102 2.54441 11.4995 3.22847ZM11.9995 10.2905C11.9995 11.3513 11.5781 12.3688 10.8279 13.1189C10.0778 13.869 9.06037 14.2905 7.9995 14.2905C6.0865 14.2905 4.4795 12.8925 4.0895 11.1085C3.9965 10.6795 4.5295 10.4655 4.9035 10.6955C5.39124 10.9946 5.93694 11.1869 6.5045 11.2595C6.8075 11.2975 7.0355 11.0195 7.0145 10.7155C6.90456 9.20185 7.3747 7.7031 8.3295 6.52347C8.38011 6.46027 8.44694 6.412 8.52285 6.38382C8.59876 6.35564 8.6809 6.3486 8.7605 6.36347C9.67227 6.54036 10.4941 7.02894 11.0851 7.74543C11.676 8.46193 11.9993 9.3617 11.9995 10.2905Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Bookmark
export const Bookmark = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 12 16" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2.01994e-06C4.52914 2.01994e-06 3.07886 0.106001 1.65429 0.31C0.690857 0.45 3.19029e-09 1.414 3.19029e-09 2.51699V15.2499C-1.08291e-05 15.3768 0.0275633 15.5016 0.0801428 15.6126C0.132722 15.7237 0.208588 15.8174 0.300643 15.8849C0.392698 15.9524 0.497933 15.9916 0.606502 15.9988C0.715071 16.006 0.823425 15.9809 0.921428 15.9259L6 13.0819L11.0786 15.9259C11.1766 15.9809 11.2849 16.006 11.3935 15.9988C11.5021 15.9916 11.6073 15.9524 11.6994 15.8849C11.7914 15.8174 11.8673 15.7237 11.9199 15.6126C11.9724 15.5016 12 15.3768 12 15.2499V2.51699C12 1.414 11.3091 0.449 10.3457 0.31C8.90395 0.103 7.45264 -0.000527367 6 2.01994e-06Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Suitcase
export const Suitcase = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 16 18" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.75C4 2.02065 4.28973 1.32118 4.80546 0.805456C5.32118 0.289731 6.02065 0 6.75 0H9.25C9.97935 0 10.6788 0.289731 11.1945 0.805456C11.7103 1.32118 12 2.02065 12 2.75V3.193C12.572 3.248 13.14 3.315 13.706 3.393C15.053 3.582 16 4.75 16 6.07V9.539C16 10.665 15.306 11.73 14.17 12.079C12.218 12.678 10.146 13 8 13C5.854 13 3.781 12.678 1.83 12.079C0.694 11.73 0 10.665 0 9.539V6.07C0 4.749 0.947 3.581 2.294 3.394C2.8612 3.31511 3.42999 3.24809 4 3.193V2.75ZM10.5 2.75V3.075C8.83484 2.9748 7.16516 2.9748 5.5 3.075V2.75C5.5 2.06 6.06 1.5 6.75 1.5H9.25C9.94 1.5 10.5 2.06 10.5 2.75ZM8 9C7.73478 9 7.48043 9.10536 7.29289 9.29289C7.10536 9.48043 7 9.73478 7 10V10.01C7 10.2752 7.10536 10.5296 7.29289 10.7171C7.48043 10.9046 7.73478 11.01 8 11.01H8.01C8.27522 11.01 8.52957 10.9046 8.71711 10.7171C8.90464 10.5296 9.01 10.2752 9.01 10.01V10C9.01 9.73478 8.90464 9.48043 8.71711 9.29289C8.52957 9.10536 8.27522 9 8.01 9H8Z"
        fill="currentColor"
      />
      <path
        d="M1 14.055V13.371C1.126 13.424 1.255 13.471 1.39 13.513C3.482 14.155 5.703 14.5 8 14.5C10.297 14.5 12.518 14.155 14.61 13.513C14.745 13.472 14.874 13.424 15 13.371V14.055C15 15.402 14.015 16.585 12.637 16.741C9.5554 17.0879 6.4446 17.0879 3.363 16.741C1.985 16.585 1 15.402 1 14.055Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Photo
export const Photo = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 18 14" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H15.75C16.0455 0 16.3381 0.058198 16.611 0.171271C16.884 0.284344 17.1321 0.450078 17.341 0.65901C17.5499 0.867942 17.7157 1.11598 17.8287 1.38896C17.9418 1.66194 18 1.95453 18 2.25V11.75C18 12.0455 17.9418 12.3381 17.8287 12.611C17.7157 12.884 17.5499 13.1321 17.341 13.341C17.1321 13.5499 16.884 13.7157 16.611 13.8287C16.3381 13.9418 16.0455 14 15.75 14H2.25C1.65326 14 1.08097 13.7629 0.65901 13.341C0.237053 12.919 0 12.3467 0 11.75V2.25ZM1.5 8.06V11.75C1.5 12.164 1.836 12.5 2.25 12.5H15.75C15.9489 12.5 16.1397 12.421 16.2803 12.2803C16.421 12.1397 16.5 11.9489 16.5 11.75V9.06L14.28 6.841C14.1394 6.70055 13.9488 6.62166 13.75 6.62166C13.5512 6.62166 13.3606 6.70055 13.22 6.841L11.31 8.75L11.78 9.22C11.8537 9.28866 11.9128 9.37146 11.9538 9.46346C11.9948 9.55546 12.0168 9.65478 12.0186 9.75548C12.0204 9.85618 12.0018 9.95621 11.9641 10.0496C11.9264 10.143 11.8703 10.2278 11.799 10.299C11.7278 10.3703 11.643 10.4264 11.5496 10.4641C11.4562 10.5018 11.3562 10.5204 11.2555 10.5186C11.1548 10.5168 11.0555 10.4948 10.9635 10.4538C10.8715 10.4128 10.7887 10.3537 10.72 10.28L5.53 5.091C5.38937 4.95055 5.19875 4.87166 5 4.87166C4.80125 4.87166 4.61063 4.95055 4.47 5.091L1.5 8.06ZM11 4C11 4.26522 10.8946 4.51957 10.7071 4.70711C10.5196 4.89464 10.2652 5 10 5C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Arrow
export const Arrow = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 8 8" fill="none" className={className}>
      <path
        d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Arrow right
export const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  )
}

// Arrow left
export const ArrowLeft = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className={className}
    >
      <path
        transform="scale(-1, 1) translate(-24, 0)"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
      />
    </svg>
  )
}

// Arrow down
export const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 4.5L12 19.5M12 19.5L5.25 12.75M12 19.5L18.75 12.75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Untick
export const Untick = ({ className }: { className?: string }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.67751 9.31007C2.21429 7.50679 2.68862 5.51239 4.1005 4.1005C5.51238 2.68862 7.50679 2.21429 9.31007 2.67751C10.2576 1.07485 12.0033 0 14 0C15.9967 0 17.7424 1.07485 18.6899 2.67752C20.4932 2.2143 22.4876 2.68863 23.8995 4.10051C25.3114 5.51239 25.7857 7.50679 25.3225 9.31007C26.9251 10.2576 28 12.0033 28 14C28 15.9967 26.9252 17.7424 25.3225 18.6899C25.7857 20.4932 25.3114 22.4876 23.8995 23.8995C22.4876 25.3114 20.4932 25.7857 18.6899 25.3225C17.7424 26.9251 15.9967 28 14 28C12.0033 28 10.2576 26.9251 9.31007 25.3225C7.50679 25.7857 5.51239 25.3114 4.10051 23.8995C2.68863 22.4876 2.2143 20.4932 2.67752 18.6899C1.07485 17.7424 0 15.9967 0 14C0 12.0033 1.07485 10.2576 2.67751 9.31007ZM19.4355 11.0745C20.0213 10.4888 20.0213 9.53901 19.4355 8.95323C18.8498 8.36744 17.9 8.36744 17.3142 8.95323L14.1943 12.0732L11.0743 8.95323C10.4885 8.36744 9.5388 8.36744 8.95301 8.95323C8.36723 9.53902 8.36723 10.4888 8.95301 11.0745L12.073 14.1945L8.95311 17.3143C8.36733 17.9001 8.36733 18.8499 8.95311 19.4357C9.5389 20.0214 10.4886 20.0214 11.0744 19.4357L14.1943 16.3158L17.3141 19.4357C17.8999 20.0214 18.8497 20.0214 19.4354 19.4357C20.0212 18.8499 20.0212 17.9001 19.4354 17.3143L16.3156 14.1945L19.4355 11.0745Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Spotify
export const Spotify = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 22 22" fill="none" className={className}>
      <path
        d="M11 0C4.95 0 0 4.95 0 11C0 17.05 4.95 22 11 22C17.05 22 22 17.05 22 11C22 4.95 17.105 0 11 0ZM16.0609 15.895C15.8409 16.2241 15.4559 16.335 15.125 16.115C12.54 14.52 9.295 14.1891 5.44408 15.0691C5.06092 15.1809 4.73 14.905 4.62 14.575C4.51 14.1891 4.785 13.86 5.115 13.75C9.295 12.8141 12.925 13.2 15.785 14.96C16.17 15.125 16.2241 15.5641 16.0609 15.895ZM17.3809 12.87C17.105 13.255 16.61 13.42 16.2241 13.145C13.255 11.33 8.745 10.78 5.28 11.88C4.84092 11.99 4.345 11.77 4.235 11.33C4.125 10.89 4.345 10.3941 4.785 10.2841C8.8 9.075 13.75 9.68092 17.16 11.77C17.4909 11.9359 17.655 12.485 17.3809 12.87ZM17.4909 9.79C13.97 7.7 8.085 7.48 4.73 8.52592C4.18 8.69 3.63 8.36 3.465 7.865C3.3 7.31408 3.63 6.765 4.125 6.59908C8.03 5.44408 14.465 5.66408 18.5359 8.085C19.03 8.36 19.195 9.02 18.92 9.515C18.6459 9.90092 17.985 10.0641 17.4909 9.79Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Chat chin
export const ChatChin = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 22 18" fill="none" className={className}>
      <path
        d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Share on Twitter
export const ShareTwitter = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 23" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.14338 22.8682C3.36074 22.9072 3.57959 22.9375 3.79939 22.959C5.62931 23.1416 7.46812 22.7113 9.02523 21.7361C9.97785 21.9593 10.9748 22.0783 12 22.0783C18.5502 22.0783 24 17.2088 24 11.0391C24 4.86949 18.5502 0 12 0C5.44985 0 0 4.86949 0 11.0391C0 13.9952 1.26031 16.6654 3.29108 18.6341C3.57662 18.9113 3.632 19.159 3.60369 19.3001C3.45159 20.0631 3.10678 20.7749 2.60185 21.3681C2.49702 21.4914 2.42665 21.6401 2.39782 21.7992C2.36899 21.9582 2.38272 22.122 2.43762 22.2741C2.49252 22.4262 2.58667 22.5612 2.71056 22.6655C2.83446 22.7698 2.98375 22.8397 3.14338 22.8682ZM17.4443 7.74729C17.9722 7.6806 18.4878 7.53335 18.9745 7.31026L19 7.32154C18.6421 7.87971 18.1907 8.36639 17.6675 8.75839C17.6756 8.87678 17.6756 8.99518 17.6756 9.11357V9.11366C17.6756 12.7729 14.9971 17 10.0934 17C8.64253 17.0011 7.22184 16.5688 6 15.7543C6.21179 15.7791 6.4225 15.7921 6.63375 15.7921C7.83217 15.7934 8.99624 15.3753 9.939 14.6051C9.38236 14.5942 8.84286 14.4026 8.3958 14.0572C7.94873 13.7118 7.6164 13.2297 7.44517 12.6782C7.84297 12.7557 8.25241 12.7393 8.64333 12.6302C8.04003 12.503 7.49757 12.1625 7.10798 11.6664C6.7184 11.1702 6.50568 10.549 6.50592 9.90821V9.87438C6.87586 10.0886 7.28963 10.2077 7.71275 10.2217C6.99883 9.72381 6.52758 8.87625 6.52758 7.91195C6.52469 7.42136 6.64935 6.9391 6.88833 6.51627C8.20296 8.18996 10.1654 9.29806 12.3808 9.40689C12.247 8.81183 12.3057 8.18742 12.5477 7.63063C12.7897 7.07384 13.2016 6.61581 13.7193 6.32769C14.237 6.03956 14.8316 5.93745 15.4107 6.03722C15.9899 6.13699 16.5212 6.43305 16.9222 6.87943C17.5299 6.75255 18.1008 6.52472 18.616 6.21175C18.4163 6.85408 18.0001 7.3995 17.4443 7.74729Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Share
export const Share = ({ className }: { className?: string }) => {
  return (
    <svg
      width="25"
      height="30"
      viewBox="0 0 25 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 6.99999L7 13.8M8.0543 16.9169L17 23M9 15C9 16.933 7.433 18.5 5.5 18.5C3.567 18.5 2 16.933 2 15C2 13.067 3.567 11.5 5.5 11.5C7.433 11.5 9 13.067 9 15ZM23 5.5C23 7.433 21.433 9 19.5 9C17.567 9 16 7.433 16 5.5C16 3.567 17.567 2 19.5 2C21.433 2 23 3.567 23 5.5ZM23 24.5C23 26.433 21.433 28 19.5 28C17.567 28 16 26.433 16 24.5C16 22.567 17.567 21 19.5 21C21.433 21 23 22.567 23 24.5Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  )
}

// Heart
export const Heart = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 20 18" fill="none" className={className}>
      <path
        d="M9.6359 17.9105L9.62872 17.9075L9.60615 17.8955C9.47414 17.8247 9.34319 17.752 9.21333 17.6775C7.65211 16.773 6.1931 15.7104 4.86051 14.5074C2.50051 12.3604 0 9.1743 0 5.25021C0 2.32213 2.52718 7.09531e-05 5.57744 7.09531e-05C6.42539 -0.00397858 7.26337 0.178416 8.02905 0.53369C8.79473 0.888964 9.46842 1.40797 10 2.05212C10.5317 1.40784 11.2055 0.888751 11.9714 0.533472C12.7373 0.178193 13.5755 -0.00412916 14.4236 7.09531e-05C17.4728 7.09531e-05 20 2.32213 20 5.25021C20 9.17531 17.4995 12.3614 15.1395 14.5064C13.8069 15.7094 12.3479 16.772 10.7867 17.6765C10.6568 17.7514 10.5259 17.8244 10.3938 17.8955L10.3713 17.9075L10.3641 17.9115L10.361 17.9125C10.2498 17.97 10.1259 18 10 18C9.87414 18 9.75019 17.97 9.63897 17.9125L9.6359 17.9105Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Plane
export const Plane = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
    </svg>
  )
}

// Youtube
export const Youtube = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 19.104C8.076 19.104 4.896 15.924 4.896 12C4.896 8.076 8.076 4.896 12 4.896C15.924 4.896 19.104 8.076 19.104 12C19.104 15.924 15.924 19.104 12 19.104ZM12 5.772C8.568 5.772 5.772 8.568 5.772 12C5.772 15.432 8.568 18.228 12 18.228C15.432 18.228 18.228 15.432 18.228 12C18.228 8.568 15.432 5.772 12 5.772ZM9.684 15.54V8.46L15.816 12L9.684 15.54Z"
        fill="white"
      />
      <path
        d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 19.104C8.076 19.104 4.896 15.924 4.896 12C4.896 8.076 8.076 4.896 12 4.896C15.924 4.896 19.104 8.076 19.104 12C19.104 15.924 15.924 19.104 12 19.104ZM12 5.772C8.568 5.772 5.772 8.568 5.772 12C5.772 15.432 8.568 18.228 12 18.228C15.432 18.228 18.228 15.432 18.228 12C18.228 8.568 15.432 5.772 12 5.772ZM9.684 15.54V8.46L15.816 12L9.684 15.54Z"
        fill="#FF0000"
      />
    </svg>
  )
}

// Music
export const Music = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
      />
    </svg>
  )
}

// PlayCircle
export const PlayCircle = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

// Code
export const Code = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

const Icons = {
  Linkedin,
  Github,
  Youtube,
  YoutubeLogo,
  ChatChin,
  X,
  Email,
  Labs,
  Code,
  Fire,
  Bookmark,
  Suitcase,
  Photo,
  Arrow,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Untick,
  Spotify,
  Instagram,
  ShareTwitter,
  Share,
  Heart,
  Plane,
  PlayCircle,
  Music,
}

export default Icons