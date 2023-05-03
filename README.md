[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

# 報告
- 姓名：陳君翰
- 網站連結：[netlify](https://effervescent-pasca-1f0f89.netlify.app) 
- 加分項目：無
- 其他有趣：無。不過用 react 開發還蠻舒服的，然後終於弄懂為什麼 netlify build error 時很想扇自己巴掌 xd
## 行為設計
- 當使用者離開產品詳細資訊頁面又回來時：圖片會呈現預設頁面，即第一個顏色的正面（多半為白色正面）
- 當使用者關閉網頁又重開時：全部恢復原始狀態，購物車會被清空
- 當使用者開啟複數網頁時：各個頁面之間相互獨立，不會互相影響
## React vs. vanilla javascript
### 哪個比較方便
我覺得 vanilla js 比較方便。
因為 `npx create-react-app` 需要網路連線，在沒有網路的地方根本就無法開始，而 vanilla js 隨手就能建立檔案，比較輕便。
### 哪一個比較容易理解如何操作
我認為對小型專案、初學者而言，vanilla js 比較容易理解；對大型專案、較有經驗的開發者而言，react 比較好理解。
vanilla js 的概念和其他程式語言差不多，也就是多了 event listener, DOM manipulation, asynchronous js 的功能，雖然也說不上很簡單，但是也不到太困難的程度
而 react 是基於 javascript 之上再衍伸的 framwork，在基礎上需要把 js 本身的基礎打好，也還要理解 jsx, component, state, re-render 的概念和關係，絕非容易上手
但是，由於 vanilla js 的功能較為基礎，因此比較適合小型專案，一旦交互影響的變數、事件開始變多，複雜性會指數及上升，到最後連開法者自己都不知道其中複雜的邏輯（hw2 就是個明顯的例子）
而 react 由於擁有 state 的概念，操作各個變數的狀態變得極為簡單，而且操控的 handler 還能在元件之間互相傳遞，方便解耦，而且 react 能用 jsx 撰寫，對於 html 的架構也會更為直觀好懂，不用老是多個頁面之間不斷跳來跳去，確實是好操作了許多
### 哪一個在實作同一個頁面時需要撰寫更多程式碼
假設 css 是獨立出來的，那就是要看 html + javascript 的程式碼數量
1. 動態生成元件：如果 js 是使用 `elem.innerHTML` 則和 react 差不多，但渲染速度可能會變慢；而 js 如果是使用 `document.createElement(), elem.appendChild()` 的話，那程式碼數量絕對超高
2. 控制 state：一定是 react 比較少，vanilla js 還要用 state pattern 才能寫清楚的東西，react 透過他內部巧妙的技法就能夠解決

結論：多數情況下，react 所需的程式碼數量是比較少的