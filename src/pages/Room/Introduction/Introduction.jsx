import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import EditorJS from "@editorjs/editorjs";
import { Header as EditorHeader } from "@editorjs/header";
import { Paragraph as EditorParagraph } from "@editorjs/paragraph";
import { Warning as EditorWarning } from "@editorjs/warning";
import { Delimiter as EditorDelimiter } from "@editorjs/delimiter";
import { Quote as EditorQuote } from "@editorjs/quote";
import EditorAlert from 'editorjs-alert';
import EditorHeaderWithAlignment from "editorjs-header-with-alignment"
import EditorParagraphWithAlignment from "editorjs-paragraph-with-alignment"
import EditorHeaderWithAnchor from 'editorjs-header-with-anchor';
import EditorToggleBlock from 'editorjs-toggle-block';
import EditorList from '@editorjs/list';
import EditorNestedList from '@editorjs/nested-list';
import EditorChecklist from '@editorjs/checklist';
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';

import MainSection from "../../../components/MainSection";
import PageWrapper from "../../../components/PageWrapper";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import DarkModeToggle from "../../../components/DarkModeToggle";

const Introduction = () => {
    const ejInstance = useRef();
    const divSection = useRef(null);
    const DEFAULT_INITIAL_DATA = {
        "time": new Date().getTime(),
        "blocks": [
            {
                "type": "header",
                "data": {
                    "text": "This is my awesome editor!",
                    "level": 1
                }
            },
        ]
    }
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                header: {
                    class: EditorHeaderWithAlignment,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter a header',
                        levels: [2, 3, 4],
                        defaultLevel: 3,
                        defaultAlignment: 'left',
                        // allowAnchor: true,
                        // anchorLength: 100,

                    }
                },
                paragraph: {
                    class: EditorParagraphWithAlignment,
                    inlineToolbar: true,
                },
                toggle: {
                    class: EditorToggleBlock,
                    inlineToolbar: true,
                },
                list: {
                    class: EditorList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                // list: {
                //     class: EditorNestedList,
                //     inlineToolbar: true,
                //     config: {
                //       defaultStyle: 'unordered'
                //     },
                checklist: {
                    class: EditorChecklist,
                    inlineToolbar: true,
                },
                nestedchecklist: editorjsNestedChecklist,
                code: editorjsCodeflask,
                alert: {
                    class: EditorAlert,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+A',
                    config: {
                        defaultType: 'primary',
                        messagePlaceholder: 'Enter something',
                    },
                },
            },
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content);
            }
        });
    };
    useEffect(() => {
        console.warn("Effect Editordiv", divSection);
        console.warn("Effect Editor", ejInstance.current);

        if (ejInstance.current === undefined) {
            console.warn("Init Editordiv", divSection);
            console.warn("Init Editor", ejInstance.current);

            initEditor();
            console.warn("Done Editor", ejInstance.current);

        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    console.warn("Editordiv", divSection);
    console.warn("EditorIns", ejInstance);
    return (
        <>
            <PageWrapper>
                <Header>
                    <Header.Items>
                        <Header.SidebarToggle />
                        <Header.Right>
                            <DarkModeToggle />
                        </Header.Right>
                    </Header.Items>
                </Header>
                <Sidebar>
                    <Sidebar.Primary>
                        <Sidebar.Primary.Logo />
                        <Sidebar.Primary.Middle>
                            <Sidebar.Primary.Middle.Home />
                            {/* <Sidebar.Primary.Middle.LaterThings/> */}
                            <Sidebar.Secondary.Expanded.Body.Middle.Divider />
                            <Sidebar.Primary.Middle.Rooms>
                                <Sidebar.Primary.Middle.Rooms.LoadItems />
                                <Sidebar.Primary.Middle.Rooms.AddRoom />

                                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
                            </Sidebar.Primary.Middle.Rooms>
                        </Sidebar.Primary.Middle>
                        <Sidebar.Primary.Bottom>
                            {/* <Sidebar.Primary.Bottom.LogOut /> */}
                            <Sidebar.Primary.Bottom.Profile />
                        </Sidebar.Primary.Bottom>
                    </Sidebar.Primary>
                    <Sidebar.Secondary>
                        <Sidebar.Secondary.Expanded>
                            <Sidebar.Secondary.Expanded.Header>
                                <Sidebar.Secondary.Expanded.Header.Title>
                                    <Sidebar.Secondary.Expanded.Header.Title.Icon />
                                    <Sidebar.Secondary.Expanded.Header.Title.Text>
                                        Tabs
                                    </Sidebar.Secondary.Expanded.Header.Title.Text>
                                </Sidebar.Secondary.Expanded.Header.Title>
                                <Sidebar.Secondary.Expanded.Header.MinimizeButton />
                            </Sidebar.Secondary.Expanded.Header>
                            <Sidebar.Secondary.Expanded.Body>
                                <Sidebar.Secondary.Expanded.Body.Tabs>
                                    <Sidebar.Secondary.Expanded.Body.Tabs.Chat />
                                    <Sidebar.Secondary.Expanded.Body.Tabs.Todo />
                                    <Sidebar.Secondary.Expanded.Body.Tabs.InfoTab />
                                    {/* <Sidebar.Secondary.Expanded.Body.Tabs.AllItems /> */}
                                </Sidebar.Secondary.Expanded.Body.Tabs>
                                {/* <Sidebar.Secondary.Expanded.Body.Middle.TopButton />
              <Sidebar.Secondary.Expanded.Body.Middle.Items>
                <Sidebar.Secondary.Expanded.Body.Middle.Items.AllItem />
              </Sidebar.Secondary.Expanded.Body.Middle.Items>
              <Sidebar.Secondary.Expanded.Body.Middle.Divider />
              <Sidebar.Secondary.Expanded.Body.Middle.SectionHeader />
              <Sidebar.Secondary.Expanded.Body.Middle.Items>
                <Sidebar.Secondary.Expanded.Body.Middle.Items.AllLabelItems />
              </Sidebar.Secondary.Expanded.Body.Middle.Items> */}
                            </Sidebar.Secondary.Expanded.Body>
                        </Sidebar.Secondary.Expanded>
                        <Sidebar.Secondary.Minimized>
                            <Sidebar.Secondary.Minimized.Header />
                            {/* <Sidebar.Secondary.Minimized.Body>
              <Sidebar.Secondary.Minimized.Body.Middle />
              <Sidebar.Secondary.Minimized.Body.MoreActions />
            </Sidebar.Secondary.Minimized.Body> */}
                        </Sidebar.Secondary.Minimized>
                    </Sidebar.Secondary>
                </Sidebar>
                <MainSection classes={"todo-app"}>
                    <div id='editorjs'></div>



                </MainSection>
            </PageWrapper>
        </>
    )
}

export default Introduction