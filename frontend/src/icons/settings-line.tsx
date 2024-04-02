/** Copyright (c) 2024, Tegon, all rights reserved. **/

import type { IconProps } from './types';

export function SettingsLine({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.64917 11.8307C1.39071 11.8253 1.15115 11.66 1.11059 11.4047C0.960634 10.4608 0.965403 9.51345 1.11137 8.5954C1.15197 8.34009 1.39147 8.17474 1.64993 8.16934C2.45031 8.15263 3.10916 7.82639 3.34981 7.2454C3.59047 6.66441 3.35526 5.96786 2.80113 5.39008C2.62219 5.2035 2.56976 4.91723 2.72159 4.708C3.26753 3.95562 3.93402 3.28239 4.70751 2.72097C4.91672 2.56912 5.203 2.62161 5.38953 2.80059C5.96742 3.35511 6.66423 3.59054 7.2454 3.34981C7.82658 3.10907 8.15284 2.44989 8.16936 1.64916C8.17469 1.39071 8.34001 1.15115 8.59532 1.11059C9.53922 0.960634 10.4865 0.965404 11.4046 1.11137C11.6599 1.15196 11.8253 1.39146 11.8307 1.64992C11.8474 2.45031 12.1736 3.10915 12.7546 3.34981C13.3356 3.59047 14.0321 3.35526 14.6099 2.80112C14.7965 2.62219 15.0828 2.56976 15.292 2.72157C16.0444 3.26753 16.7176 3.93401 17.2791 4.7075C17.4309 4.91671 17.3784 5.20299 17.1994 5.38952C16.6449 5.96741 16.4095 6.66423 16.6502 7.2454C16.8909 7.82658 17.5501 8.15284 18.3509 8.16936C18.6093 8.1747 18.8489 8.34002 18.8894 8.59534C19.0394 9.53924 19.0346 10.4865 18.8886 11.4046C18.848 11.6599 18.6085 11.8253 18.3501 11.8307C17.5497 11.8474 16.8908 12.1736 16.6502 12.7546C16.4095 13.3356 16.6448 14.0321 17.1989 14.6099C17.3778 14.7965 17.4302 15.0828 17.2784 15.292C16.7325 16.0444 16.066 16.7176 15.2925 17.279C15.0833 17.4309 14.797 17.3784 14.6104 17.1994C14.0326 16.6449 13.3357 16.4094 12.7546 16.6502C12.1735 16.8909 11.8472 17.5501 11.8307 18.3508C11.8253 18.6093 11.66 18.8488 11.4047 18.8894C10.4608 19.0394 9.51344 19.0346 8.5954 18.8886C8.34009 18.848 8.17474 18.6085 8.16934 18.3501C8.15262 17.5497 7.82639 16.8908 7.2454 16.6502C6.66441 16.4095 5.96786 16.6447 5.39007 17.1989C5.2035 17.3778 4.91723 17.4303 4.70799 17.2784C3.95561 16.7325 3.28239 16.066 2.72097 15.2925C2.56912 15.0833 2.62163 14.797 2.80061 14.6105C3.35511 14.0326 3.59054 13.3357 3.34981 12.7546C3.10908 12.1735 2.44989 11.8472 1.64917 11.8307ZM2.79952 9.99985C2.79947 10.1123 2.87628 10.2088 2.98314 10.2439C3.89075 10.5418 4.6331 11.1503 5.01236 12.066C5.3916 12.9815 5.29702 13.9368 4.86588 14.7891C4.81511 14.8895 4.82905 15.0121 4.90861 15.0916C4.98811 15.1711 5.11055 15.1849 5.21083 15.1342C6.06322 14.703 7.01846 14.6084 7.93406 14.9877C8.84968 15.3669 9.45824 16.1093 9.75609 17.0168C9.79114 17.1236 9.88748 17.2004 9.99986 17.2005C10.1123 17.2006 10.2088 17.1237 10.2439 17.0169C10.5418 16.1093 11.1503 15.3669 12.066 14.9877C12.9815 14.6084 13.9367 14.703 14.7891 15.1342C14.8895 15.1849 15.0121 15.171 15.0917 15.0914C15.1711 15.0119 15.1849 14.8894 15.1342 14.7891C14.703 13.9368 14.6084 12.9815 14.9877 12.066C15.3669 11.1504 16.1092 10.5418 17.0168 10.244C17.1236 10.2089 17.2004 10.1125 17.2005 10.0001C17.2005 9.88766 17.1237 9.79113 17.0168 9.75606C16.1092 9.45825 15.3669 8.84963 14.9877 7.93405C14.6084 7.01847 14.703 6.06326 15.1341 5.21089C15.1849 5.1105 15.171 4.98787 15.0914 4.90836C15.0119 4.82894 14.8894 4.81513 14.7891 4.86585C13.9368 5.29701 12.9816 5.39161 12.066 5.01236C11.1503 4.63311 10.5418 3.89076 10.2439 2.98317C10.2089 2.87638 10.1126 2.79958 10.0002 2.79952C9.8877 2.79947 9.79111 2.87631 9.75604 2.98319C9.45823 3.89078 8.84961 4.63311 7.93406 5.01236C7.01845 5.39161 6.06322 5.29701 5.21083 4.86587C5.11047 4.8151 4.98788 4.82903 4.90839 4.90861C4.82896 4.98811 4.81514 5.11055 4.86586 5.21083C5.29701 6.06322 5.39161 7.01846 5.01236 7.93405C4.6331 8.84961 3.89074 9.45825 2.98313 9.75611C2.87637 9.79115 2.79958 9.88748 2.79952 9.99985ZM10 12.6993C8.50919 12.6993 7.30071 11.4908 7.30071 10C7.30071 8.5092 8.50919 7.30071 10 7.30071C11.4907 7.30071 12.6993 8.5092 12.6993 10C12.6993 11.4908 11.4907 12.6993 10 12.6993ZM10 10.8998C10.497 10.8998 10.8998 10.497 10.8998 10C10.8998 9.50308 10.497 9.10026 10 9.10026C9.50307 9.10026 9.10025 9.50308 9.10025 10C9.10025 10.497 9.50307 10.8998 10 10.8998Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}