ポータルパッケージは、動的コンテンツをアプリケーションにレンダリングするための柔軟なシステムを提供します。

## Portals

ポータルは、ページ上の空きスロットに動的にレンダリングできるUIです。

「UIの部分」は、 Component または TemplateRef のいずれかであり、「オープンスロット」は PortalHost です。

ポータルとPortalHostsは、オーバーレイなどの他の概念が構築されている低レベルのビルディングブロックです。

`Portal<T>`

Method | Description
--- | ---
attach(PortalHost): Promise<T> | Attaches the portal to a host.
detach(): Promise<void> | Detaches the portal from its host.
isAttached: boolean | Whether the portal is attached.

`PortalHost`

Method | Description
--- | ---
attach(Portal): Promise<void> | Attaches a portal to the host.
detach(): Promise<void> | Detaches the portal from the host.
dispose(): Promise<void> | Permanently dispose the host.
hasAttached: boolean | Whether a portal is attached to the host.

### Portals in practice

`TemplatePortalDirective`

<ng-template>からポータルを取得するために使用します。 TemplatePortalDirectivesはポータルです。

Usage:

```
<ng-template cdkPortal>
  <p>The content of this template is captured by the portal.</p>
</ng-template>

<!-- OR -->

<!-- This result here is identical to the syntax above -->
<p *cdkPortal>
  The content of this template is captured by the portal.
</p>
```

コンポーネントは @ViewChild または @ViewChildren を使用して、 TemplatePortalDirective への参照を取得できます。

`ComponentPortal`

コンポーネントタイプからポータルを作成するために使用されます。 ポータルを使用して動的にコンポーネントを作成する場合、そのコンポーネントをNgModule の entryComponents に含める必要があります。

Usage:

```
this.userSettingsPortal = new ComponentPortal(UserSettingsComponent);
```

`PortalHostDirective`

ポータルホストをテンプレートに追加するために使用します。 PortalHostDirective は PortalHost です。

Usage:

```
<!-- Attaches the `userSettingsPortal` from the previous example. -->
<ng-template [cdkPortalHost]="userSettingsPortal"></ng-template>
```
