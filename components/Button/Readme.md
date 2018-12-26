### 概述

按钮用于开始一个即时操作。

### 代码实例

普通按钮

```jsx
<Button type="primary">Primary</Button>
<Button type="danger">Danger</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
```

加载按钮

```jsx
<Button loading={true}>默认加载</Button>
<Button loading={true} loadingText="Loading..."></Button>
```

点击事件

```jsx
<Button onClick={ () => alert('clicked') }>点我</Button>
```