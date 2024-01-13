import BigHotelItem from './BigHotelItem'
import SmallHotelList, { IImage } from '@/modules/hotel/components/Gallery/SmallHotelList'

interface HotelGalleryProps {
  previewImage: {
    url: string
    name: string
  }
  images: IImage[]
}

export default function HotelGallery(props: HotelGalleryProps) {
  return (
    <>
      <div
        className="grid grid-cols-5 gap-4"
        style={{ gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}
      >
        <BigHotelItem alt={props.previewImage.name} src={props.previewImage.url} />
        <>
          <SmallHotelList images={props.images} />
        </>
      </div>
    </>
  )
}