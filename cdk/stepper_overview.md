CDK ステッパーは、より具体的なステッパーバリエーションを構築できる基盤を提供します。 ステッパーは、コンテンツを論理的なステップに分割するウィザードのようなワークフローです

## Behavior captured by CdkStepper

ステッパーの基本 CDK バージョンは、主にどのステップがアクティブかを管理します。 これには、キーボードのやりとりを処理したり、ワークフローを進めたり巻き戻したりするためのAPIを公開することが含まれます。

### Linear stepper

リニアとしてマークされたステッパーは、次のステップに進む前に前のステップを完了する必要があります。 各ステップについて、 stepControl 属性を、ステップの有効性をチェックするために使用されるトップレベルの AbstractControl に設定することができます。

可能なアプローチは2つあります。 1つはステッパーに単一のフォームを使用し、もう1つは各ステップに異なるフォームを使用しています。

### Using a single form for the entire stepper

ステッパーに単一のフォームを使用する場合、すべてのステップが完了する前にフォームの提出を防止するために、ステップ内の中間の次/前のボタンを type="button" に設定する必要があります。

### Using a form for each individual step

各ステップにフォームを使用する場合は、フォームの1つが送信されるたびにワークフローが進められます。

## Types of steps

### Optional step

リニアステッパーのステップの完了が必要でない場合は、オプションの属性を CdkStep に設定できます。

### Editable step

デフォルトでは、ステップは編集可能です。これにより、ユーザーは以前に完了したステップに戻り、そのレスポンスを編集できます。 デフォルトを変更するには、 CdkStep で editable="true" を設定できます。

### Completed step

デフォルトでは、ステップの完了属性は、ステップが有効な場合（リニア・ステッパーの場合）、ユーザーがステップと対話した場合にtrueを返します。 ただし、ユーザーは、必要に応じて completed 属性を設定することによって、このデフォルトの完了した動作を上書きすることもできます。

## Stepper buttons

異なるステップ間のナビゲーションをサポートする2つのボタン指示： CdkStepperNext と CdkStepperPrevious があります。 ステップの内部に配置されると、自動的にクリックハンドラが追加され、ワークフローを前進または巻き戻すことができます。

## Keyboard interaction

- LEFT_ARROW: Focuses the previous step header
- RIGHT_ARROW: Focuses the next step header
- ENTER, SPACE: Selects the step that the focus is currently on
- TAB: Focuses the next tabbable element
- TAB+SHIFT: Focuses the previous tabbable element

## Accessibility

CDKステッパーは、アクセシビリティのためにタブ付きビューとして扱われるため、デフォルトでは role="tablist" が与えられます。 ステップを選択するためにクリックできるステップのヘッダーには role="tab" が与えられ、選択時に展開できるコンテンツには role="tabpanel" が与えられます。 ステップ選択変更に基づいて、ステップヘッダのアリア選択属性とステップ内容のアリア拡張属性が自動的に設定される。

ステッパーと各ステップには、aria-label または aria-labelledby を使用して意味のあるラベルを付ける必要があります。
