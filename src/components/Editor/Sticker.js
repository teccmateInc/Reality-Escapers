import ReactGiphySearchBox from 'react-giphy-searchbox'

const Sticker = () => (
  <ReactGiphySearchBox
    apiKey='3VMX9Pi9HUolNlwGq4K8VwzwX750M1bo'
    onSelect={(item) => console.log(item)}
    library='stickers'
    searchPlaceholder='Search for Stickers'
    masonryConfig={[
      { columns: 2, imageWidth: 110, gutter: 5 },
      { mq: '700px', columns: 2, imageWidth: 110, gutter: 5 },
    ]}
  />
)
export default Sticker
