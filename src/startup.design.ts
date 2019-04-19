/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import "./polyfills";
import * as ko from "knockout";
import { InversifyInjector } from "@paperbits/common/injection";
import { CoreEditModule } from "@paperbits/core/core.edit.module";
import { FormsEditModule } from "@paperbits/forms/forms.edit.module";
import { EmailsDesignModule } from "@paperbits/emails/emails.design.module";
import { StylingEditModule } from "@paperbits/styles/styles.edit.module";
import { ProseMirrorModule } from "@paperbits/prosemirror/prosemirror.module";
import { OfflineModule } from "@paperbits/common/persistence/offline.module";
import { DemoEditModule } from "./components/demo.edit.module";
import { YourWidgetModule } from "./components/your-widget/vue/yourWidget.module";

/* Uncomment to enable Firebase module */
// import { FirebaseModule } from "@paperbits/firebase/firebase.module";

const injector = new InversifyInjector();
injector.bindModule(new CoreEditModule());
injector.bindModule(new FormsEditModule());
injector.bindModule(new EmailsDesignModule());
injector.bindModule(new StylingEditModule());
injector.bindModule(new ProseMirrorModule());
injector.bindModule(new DemoEditModule());

injector.bindModule(new YourWidgetModule());

/* Uncomment to enable Firebase module */
// injector.bindModule(new FirebaseModule());

injector.bindModule(new OfflineModule());
injector.resolve("autostart");

document.addEventListener("DOMContentLoaded", () => {
    setImmediate(() => ko.applyBindings(undefined, document.body));
});