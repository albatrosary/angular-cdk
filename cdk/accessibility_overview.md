The a11y package provides a number of tools to improve accessibility, described below.

a11y パッケージには、アクセシビリティを向上させるためのさまざまなツールが用意されています。

## ListKeyManager

ListKeyManager は、キーボード操作に基づいてアイテムのリスト内のアクティブなオプションを管理します。 role = "menu" または role = "listbox" パターンに対応するコンポーネントとともに使用することを意図しています。

## Basic usage

ListKeyManager を使用するコンポーネントは、一般的に次の3つのことを行います:

- 管理されているオプションの @ViewChildren クエリを作成します。
- ListKeyManagerを初期化し、オプションを渡します。
- マネージコンポーネントからListKeyManagerへキーボードイベントを転送します

各オプションは、ListKeyManagerOptionインターフェイスを実装する必要があります

```
interface ListKeyManagerOption {
  disabled?: boolean;
  getLabel?(): string;
}
```

### Wrapping

オプションを使ったナビゲーションは、withWrapメソッドでラップすることができます

```
this.keyManager = new FocusKeyManager(...).withWrap();
```

### Types of key managers

ListKeyManager には、 FocusKeyManager と ActiveDescendantKeyManager という2つの種類があります。

## FocusKeyManager

オプションがブラウザのフォーカスを直接受け取るときに使用されます。 管理対象の各アイテムは、 FocusableOption インターフェイスを実装する必要があります。

```
interface FocusableOption extends ListKeyManagerOption {
  focus(): void;
}
```

## ActiveDescendantKeyManager

オプションが aria-activedescendant を介してアクティブとしてマークされるときに使用されます。 管理対象の各アイテムは、 FocusableOption インターフェイスを実装する必要があります。

```
interface Highlightable extends ListKeyManagerOption {
  setActiveStyles(): void;
  setInactiveStyles(): void;
}
```

## FocusTrap

cdkTrapFocus ディレクティブは、要素内の Tab キーのフォーカスをトラップします。 これは、モーダルダイアログのようなコンポーネントのアクセシブルなエクスペリエンスを作成するために使用することを目的としています。ここでは、フォーカスを制限する必要があります。

この指令は A11yModule で宣言されています。

### Example

```
<div class="my-inner-dialog-content" cdkTrapFocus>
  <!-- Tab and Shift + Tab will not leave this element. -->
</div>
```

この指示文は、マウス操作のためにトラップされた領域からフォーカスが移動するのを防ぐものではありません。

## InteractivityChecker

InteractivityChecker は、アクセシビリティのために、無効、可視、タブブル、フォーカス可能な状態をキャプチャして要素の対話性をチェックします。 詳細については、APIドキュメントを参照してください。

## LiveAnnouncer

LiveAnnouncer は、aria-live 地域を使用してスクリーンリーダーユーザーのためのメッセージをアナウンスするために使用されます。 aria-live 地域の詳細については、W3CのWAI-ARIAを参照してください。

### Example

```
@Component({...})
export class MyComponent {

 constructor(liveAnnouncer: LiveAnnouncer) {
   liveAnnouncer.announce("Hey Google");
 }
}
```
