bidiパッケージは、コンポーネントがアプリケーションの LTR/RTL レイアウト方向の変更を取得し、それに応答する共通のシステムを提供します。

## Directionality

CDK の BidiModule を含めると、コンポーネントは Directionality を注入して現在のテキスト方向( RTL または LTR )を取得できます。

### Example

```
@Component({ ... }) 
export class MyWidget implements OnDestroy {

  /** Whether the widget is in RTL mode or not. */
  private isRtl: boolean;

  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;  

  constructor(dir: Directionality) {
    this.isRtl = dir.value === 'rtl';

    _dirChangeSubscription = dir.change.subscribe(() => {
      this.flipDirection();
    });
  }

  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
  }
}
```

## The Dir directive

BidiModule には、dir 属性を持つ要素と一致するディレクティブも含まれています。 このディレクティブは Directionality と同じ API を持ち、 Directionality としてそれ自身を提供します。 これにより、 Directionality を注入するコンポーネントは、最も近い祖先のレイアウト方向のコンテキストを取得します。
