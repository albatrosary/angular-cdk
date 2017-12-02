レイアウトパッケージは、画面サイズの変更に反応する反応的なUIを構築するためのユーティリティを提供します。

## BreakpointObserver

BreakpointObserver は、メディアクエリを評価し、その変化に反応するためのユーティリティです。

### Evaluate against the current viewport

isMatched メソッドは、現在のビューポートサイズに対して1つまたは複数のメディアクエリを評価するために使用されます。

```
const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
```

### React to changes to the viewport

observe メソッドは、指定されたメディアクエリの1つが異なる結果を持つたびに放出する観測可能なストリームを取得するために使用されます。

```
const layoutChanges = breakpointObserver.observe([
  '(orientation: portrait)',
  '(orientation: landscape)',
]);

layoutChanges.subscribe(result => {
  updateMyLayoutForOrientationChange();
});
```

### Default breakpoints

異なるデバイスタイプのブレークポイントに対応する、デフォルトのメディアクエリのセットが利用可能です。

```
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({...})
class MyComponent {
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });
  }
}
```

内蔵のブレークポイントは、Google の Material Design 仕様に基づいています。 使用可能な値は次のとおりです。

- Handset
- Tablet
- Web
- HandsetPortrait
- TabletPortrait
- WebPortrait
- HandsetLandscape
- TabletLandscape
- WebLandscape

## MediaMatcher

MediaMatcher は、ネイティブ matcheMedia をラップする下位レベルのユーティリティです。 このサービスはブラウザの違いを正規化し、便利なAPIとして機能し、単体テストでは偽のものに置き換えることができます。 matchMediaメソッドを使用して、ネイティブの MediaQueryList を取得できます。

```
@Component({...})
class MyComponent {
  constructor(mediaMatcher: MediaMatcher) {
    const mediaQueryList = mediaMatcher.matchMedia('(min-width: 1px)');
  }
}
```
