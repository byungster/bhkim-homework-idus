import { v4 as uuidv4 } from "uuid";

export class Dummy {
  constructor() {
    this.firstNames = [
      "하얀",
      "검은",
      "영롱한",
      "달달한",
      "유니크한",
      "용속한",
      "산지 직송",
      "빛나는",
      "푸른 빛의",
      "신나는",
      "따스한",
      "으슬으슬한",
      "가득한",
      "최신 유행",
      "자유로운",
    ];
    this.lastNames = [
      "철수",
      "영미",
      "명보",
      "병호",
      "기현",
      "종국",
      "상화",
      "빌리",
      "먹보",
      "대헌",
      "흥민",
      "희찬",
      "영조",
      "영표",
      "지성",
    ];
    this.products = [
      "밥솥",
      "자전거",
      "인센스 홀더",
      "향초",
      "복주머니",
      "지갑",
      "담배케이스",
      "연",
      "꽃병",
      "와인",
      "담금주",
      "술독",
      "바구니",
      "블라인드",
      "바지락 찜",
    ];
  }

  createCardInfoList(count) {
    let infoDummy = [];

    for (let i = 0; i < count; i++) {
      let product = this.products[Math.floor(Math.random() * 10) + 1];
      let firstName = this.firstNames[Math.floor(Math.random() * 10) + 1];
      let title = firstName + " " + product;
      let seller =
        product +
        " 만드는 " +
        this.lastNames[Math.floor(Math.random() * 10) + 1] +
        "의 ";

      let rate = Math.floor(Math.random() * 5);
      let reviewComment = Math.floor(Math.random() * 10)
        ? `${title} 너무 좋은 것 같아요 왜냐하면 ${firstName} 부분이 행복하게 해줘요.`
        : "";

      infoDummy.push({
        id: uuidv4(),
        thumbnailPath: `https://picsum.photos/600/400?random=${[
          Math.floor(Math.random() * 50) + 1,
        ]}`,
        seller: seller,
        title: title,
        price: (Math.floor(Math.random() * 1000) + 10) * 100,
        saleRate: Math.floor(Math.random() * 90) + 5,
        reviewRate: rate,
        reviewComment: rate ? reviewComment : "",
        reviewAuthor: rate ? "김병호" : "",
      });
    }

    return infoDummy;
  }
}
