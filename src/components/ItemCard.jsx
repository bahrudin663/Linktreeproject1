function ItemCard({ judul, jumlah, harga }) {
    return (
      <div style={{ display: 'flex', border: '1px solid black' }}>
        <div>
          <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/5/29/cfee9027-f23b-4ab1-a896-e32fe195365c.jpg.webp?ect=4g" alt="" />
        </div>
        <div style={{ paddingLeft: '10px' }}>
          <h4>{judul}</h4>
          <p>{jumlah} product</p>
          <p>Rp {harga}</p>
        </div>
      </div>
    )
  }

  export default ItemCard