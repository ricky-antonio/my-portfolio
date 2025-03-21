import "./CodeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, code }) => {
    return (
        <div className="code__block">
            <div className="flex__center dot__container">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
            </div>

            <div className="code__container">
                <SyntaxHighlighter
                    language={language}
                    style={docco}
                    customStyle={{
                        background: "rgba(var(--color-primary-rgb), 0.03)",
                        color: "skyblue",
                        padding: "20px",
                    }}
                    wrapLongLines={true}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
