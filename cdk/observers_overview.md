observers パッケージは、 MutationObserver などのネイティブ Web プラットフォームオブザーバの上に構築された便利なディレクティブを提供します。

## cdkObserveContent

ホスト要素の内容がいつ変化するかを観察するための指示。 コンテンツへの突然変異が観察されると、イベントが発生します。

```
<div class="projected-content-wrapper" (cdkObserveContent)="projectContentChanged()">
  <ng-content></ng-content>
</div>
```
