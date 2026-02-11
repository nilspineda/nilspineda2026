import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_CSf9IKit.mjs';
import 'piccolore';
import 'clsx';

const html = () => "<h2 id=\"jamessaenzginecologooncologocom\">Jamessaenzginecologooncologo.com</h2>\n<p>Doctor james saenz ginecologo oncologo en guadalajara, jalisco. Especialista en el diagnóstico y tratamiento de enfermedades ginecológicas malignas y benignas, incluyendo cáncer de mama, cáncer de ovario, cáncer de cuello uterino, entre otros. Con un enfoque integral y personalizado, el Dr. Saenz se dedica a brindar atención médica de alta calidad a sus pacientes, combinando su experiencia clínica con los avances más recientes en el campo de la ginecología oncológica.</p>\n<h2 id=\"c\">C</h2>";

				const frontmatter = {"title":"James Saenz","slug":"jamez-saenz","image":"/jamesSaenz.png","url":"https://jamessaenzginecologooncologo.com/","description":"Tu salud y bienestar son mi prioridad. Brindo atención médica especializada en ginecología oncológica, con altos estándares de formación académica y un trato humano, respetuoso y cercano, acompañándote en cada etapa de tu cuidado.","date":"2025-10-03T00:00:00.000Z","draft":true,"tags":["web","Diseño"]};
				const file = "D:/Web/nilspineda2026/src/content/blog/jamez-saenz.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                    \r\n                   \r\n                        \r\n                                                \r\n                                                                                                                                                                                                                                                     \r\n                \r\n           \r\n                       \r\n   \r\n\r\n## Jamessaenzginecologooncologo.com\r\n\r\nDoctor james saenz ginecologo oncologo en guadalajara, jalisco. Especialista en el diagnóstico y tratamiento de enfermedades ginecológicas malignas y benignas, incluyendo cáncer de mama, cáncer de ovario, cáncer de cuello uterino, entre otros. Con un enfoque integral y personalizado, el Dr. Saenz se dedica a brindar atención médica de alta calidad a sus pacientes, combinando su experiencia clínica con los avances más recientes en el campo de la ginecología oncológica.\r\n\r\n## C\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"jamessaenzginecologooncologocom","text":"Jamessaenzginecologooncologo.com"},{"depth":2,"slug":"c","text":"C"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
