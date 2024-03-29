import { AntdImage } from '@/ui'

interface HotelImageProps {
  alt: string
  src: string
  small?: boolean
}

export default function HotelImage(props: HotelImageProps) {
  return <AntdImage src={props.src} alt={props.alt} small={props.small} />
}
