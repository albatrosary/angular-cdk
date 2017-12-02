オーバーレイパッケージは、画面上のフローティングパネルを開く方法を提供します。

## Creating overlays

overlay.create() を呼び出すと、OverlayRef インスタンスが返されます。 このインスタンスは、その特定のオーバーレイを管理するためのハンドルです。

OverlayRef は PortalHost- で作成されたコンテンツで、 Portal を追加することで追加できます。 詳細については、ポータルのドキュメントを参照してください。

```
const overlayRef = overlay.create();
const userProfilePortal = new ComponentPortal(UserProfile);
overlayRef.attach(userProfilePortal);
```

## Configuring an overlay

オーバーレイを作成するときに、オプションの構成オブジェクトを提供することができます。

```
const overlayRef = overlay.create({
  height: '400px',
  width: '600px',
});
```

設定オプションの完全なセットはAPIドキュメントにあります。

### Position strategies

positionStrategy 設定オプションは、オーバーレイが画面上にどのように配置されるかを決定します。ライブラリには、 GlobalPositionStrategy と ConnectedPositionStrategy という2つのポジション戦略があります。

GlobalPositionStrategy は、他の要素とは無関係に、ビューポート内の特定の位置を必要とするオーバーレイに使用されます。これは、モーダルダイアログとアプリケーションレベルの通知によく使用されます。

ConnectedPositionStrategy は、ページ上の他の「原点」要素に関連して配置されたオーバーレイに使用されます。これは、メニュー、ピッカー、およびツールチップによく使用されます。接続ストラテジを使用する場合、優先順位のセットが提供されます。オーバーレイがビューポート内でどのくらいうまく収まるかに基づいて「最良」の位置が選択されます。

PositionStrategy インターフェイスを実装することで、カスタムポジション戦略を作成できます。各 PositionStrategy は、オーバーレイの位置を更新する必要があるときに呼び出される apply メソッドを定義します。カスタム位置ストラテジは、オーバーレイ要素の位置付けに関連して必要な他の API を追加的に公開することができます。

### Scroll strategies

scrollStrategy 設定オプションは、オーバーレイ要素の外側でスクロールする方法を決定します。ライブラリの一部として利用できる4つのスクロール方法があります。

デフォルトのオプションは NoopScrollStrategy です。この戦略は何もしません。

スクロールが発生すると、 CloseScrollStrategy は自動的にオーバーレイを閉じます。

BlockScrollStrategy は、オーバーレイが開いている間にページのスクロールをブロックします。一部のアプリケーションでは、特殊なページスクロールやカスタマイズされたページスクロールを実装することがあります。 BlockScrollStrategy がこのような状況に矛盾する場合、 BlockScrollStrategy をカスタム実装で再提供することでオーバーライドできます。

RepositionScrollStrategy はスクロール時にオーバーレイ要素の位置を変更します。スクロールにいくらかのパフォーマンス上の影響があることに注意してください。ユーザーは、特定のアプリケーションごとにこのコストを考慮する必要があります。

カスタムスクロール戦略は、ScrollStrategyインタフェースを実装することで作成できます。各戦略は、通常、スクロールが行われるときに通知されるScrollDispatcher(@angular/cdk/scrolling から)を注入します。スクロールイベントの検出とディスパッチの詳細については、ScrollDispatcherのドキュメントを参照してください。

## The overlay container

OverlayContainer は、すべての個々のオーバーレイ要素がレンダリングされるコンテナ要素へのハンドルを提供します。 デフォルトでは、オーバーレイコンテナはドキュメント本体に直接追加されるため、オーバーフロー：隠された親によってオーバーレイが切り抜かれることはありません。

### Full-screen overlays

FullscreenOverlayContainer は、オーバーレイコンテナの代わりに、フルスクリーンモードでオーバーレイ要素を正しく表示する機能をサポートしています。

FullscreenOverlayContainer は、 NgModule で提供することで有効にすることができます：

```
@NgModule({
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  // ...
})
export class MyModule { }
```
