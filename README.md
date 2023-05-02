[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

# 報告
- 姓名：陳君翰
- 網站連結：[netlify](https://clinquant-lamington-7e1338.netlify.app) （目前無法成功 build，還在處理）
- 加分項目：無
- 其他：我的 shopping cart 還沒做 styling ...
## React vs. vanilla javascript
對初學只而言 react 並不一定比較直觀好懂，尤其是 state, re-render 的細部概念並不容易
然而，在理解後，React, `jsx` 寫起來很順
1. 在動態生成元件時能夠使用更少的程式碼，比起 javascript `document.createComponent` 易讀許多
2. state 的控管變得很簡單，只要 `useState` 用下去，等到 re-render 後被動調整變數，state 就定下來了
3. component 可以很方便的解耦、分開撰寫，真的是一大福音