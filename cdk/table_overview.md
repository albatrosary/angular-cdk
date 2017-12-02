<cdk-table>は、完全にテンプレート化されたAPI、動的列、およびアクセス可能なDOM構造を備えた、カスタマイズされていないカスタマイズ可能なデータテーブルです。 このコンポーネントは、誰でも独自のカスタマイズされたデータ・テーブル・エクスペリエンスを構築できるコアとして機能します。

この表は、並べ替えやページ分割などの他の機能を構築するための基礎を提供します。 これらの問題については意見を表明しないため、開発者はテーブルに関連付けられたインタラクションパターンを完全に制御できます。

マテリアルデザインのスタイル付きテーブルについては、CDKデータテーブルの上に構築される <mat-table> のドキュメントを参照してください。

## Using the CDK data-table

### Writing your table template

データテーブルテンプレートを作成するための最初のステップは、列を定義することです。 列定義は、<ng-container> を介してcdkColumnDef指示文で指定され、列に名前が付けられます。 各列定義はさらに、ヘッダーセルテンプレート(cdkHeaderCellDef)とデータセルテンプレート（cdkCellDef）の両方を定義します。

```
<ng-container cdkColumnDef="username">
  <cdk-header-cell *cdkHeaderCellDef> User name </cdk-header-cell>
  <cdk-cell *cdkCellDef="let row"> {{row.a}} </cdk-cell>
</ng-container>
```

定義された列のセットは、レンダリング可能な列を表します。 特定の行にレンダリングされた特定の列とその順序は、その行に指定されます（下記参照）。

cdkCellDefは行データをセルテンプレートで参照できるように行コンテキストをエクスポートすることに注意してください。 このディレクティブは、ngFor(index、even、odd、first、last)と同じプロパティもエクスポートします。

次のステップは、テーブルのヘッダ行(cdkHeaderRowDef)とデータ行(cdkRowDef)を定義することです。

```
<cdk-header-row *cdkHeaderRowDef="['username', 'age', 'title']"></cdk-header-row>
<cdk-row *cdkRowDef="let row; columns: ['username', 'age', 'title']"></cdk-row>
```

これらの行テンプレートは、cdkColumnDef に与えられた名前でレンダリングされる特定の列を受け入れます。

また、cdkRowDef は行コンテキストをエクスポートします。このコンテキストは、行要素のイベントおよびプロパティのバインディングに使用できます。 ヘッダー行またはデータ行テンプレートの内部に配置されているコンテンツはすべて無視されます。これは、行のレンダリングされたコンテンツが上記のセルテンプレートに由来するためです。

### Example: table with three columns

```
<cdk-table [dataSource]="dataSource">
  <!-- User name Definition -->
  <ng-container cdkColumnDef="username">
    <cdk-header-cell *cdkHeaderCellDef> User name </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.username}} </cdk-cell>
  </ng-container>

  <!-- Age Definition -->
  <ng-container cdkColumnDef="age">
    <cdk-header-cell *cdkHeaderCellDef> Age </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.age}} </cdk-cell>
  </ng-container>

  <!-- Title Definition -->
  <ng-container cdkColumnDef="title">
    <cdk-header-cell *cdkHeaderCellDef> Title </cdk-header-cell>
    <cdk-cell *cdkCellDef="let row"> {{row.title}} </cdk-cell>
  </ng-container>

  <!-- Header and Row Declarations -->
  <cdk-header-row *cdkHeaderRowDef="['username', 'age', 'title']"></cdk-header-row>
  <cdk-row *cdkRowDef="let row; columns: ['username', 'age', 'title']"></cdk-row>
</cdk-table>
```

行に与えられた列は、どのセルがレンダリングされ、どの順番であるかを決定します。 したがって、実行時に表示される列を動的に変更するために、バインドを介して列を設定することができます。

```
<cdk-row *cdkRowDef="let row; columns: myDisplayedColumns"></cdk-row>
```

テンプレート内で定義されているすべての列を表示する必要はなく、同じ順序を使用する必要もありません。 たとえば、年齢とユーザー名のみの表をその順序で表示するには、行とヘッダーの定義は次のようになります。

```
<cdk-row *cdkRowDef="let row; columns: ['age', 'username']"></cdk-row>
```

イベント・バインディングとプロパティ・バインディングは、行要素に直接追加できます。

### Example: table with event and class binding

```
<cdk-header-row *cdkHeaderRowDef="['age', 'username']"
                (click)="handleHeaderRowClick(row)">
</cdk-header-row>

<cdk-row *cdkRowDef="let row; columns: ['age', 'username']"
          [class.can-vote]="row.age >= 18"
          (click)="handleRowClick(row)">
</cdk-row>
```

### Styling columns

各ヘッダーと行セルには、その列を含む CSS クラスが提供されます。 たとえば、列名に表示されるセルには、クラス cdk-column-name が与えられます。 これにより、ヘッダーと行全体で一致するスタイルを列に与えることができます。

列には名前に任意の文字列を付けることができるため、CSSクラスに直接適用することはできない可能性があります（例：*nameColumn！）。 このような場合、特殊文字は - 文字に置き換えられます。 たとえば、*nameColumn という名前の列にあるセルのコンテナです。 クラス cdk-column-nameColumn- が与えられます。

### Connecting the table to a data source

データは、 DataSource を介してテーブルに提供されます。 テーブルがデータソースを受け取ると、DataSource の connect() メソッドが呼び出され、データの配列を出力する observable が返されます。 データソースがこのストリームにデータを送信するたびに、テーブルは更新をレンダリングします。

データソースはこのストリームを提供するため、テーブルの更新をトリガする責任があります。 これは、 WebSocket 接続、ユーザー対話、モデル更新、時間ベースの間隔などに基づいています。最も一般的には、並べ替えやページ設定などのユーザー操作によって更新がトリガーされます。

`trackBy`

パフォーマンスを向上させるために、trackBy 関数を Angular の ngFor trackBy と同様にテーブルに提供することができます。 これは、更新ごとにデータがどのように変化するかを追跡するために行を一意に識別する方法を表に示します。

```
<cdk-table [dataSource]="dataSource" [trackBy]="myTrackById">
```
