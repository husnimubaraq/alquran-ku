import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../../src/constants/colors';

const BismillahBackground = ({ size, color, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 84 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M77.026 12.94c.276.172.715.469.736.825a41655.97 41655.97 0 0 0 .016-.926l.004-.07c-.038.29-.38.679-.69.686-.14.003-.224-.099-.253-.228-.006-.029-.007-.058-.01-.087-.007-.177-.01-.04-.011.41-.016.45-.019.587-.008.412.008-.089.019-.177.033-.264a9.536 9.536 0 0 1 .44-1.595c.012-.036.006-.12.006-.15a27.285 27.285 0 0 0 .016-.724c0-.04-.014-.113-.001-.15-.237.666-.462 1.372-.484 2.083a29.19 29.19 0 0 0-.017.858c0 .082-.002.17.02.25.046.176.19.243.36.187.205-.069.386-.25.493-.434a.593.593 0 0 0 .086-.248c.031-.317.024-.646.022-.964-.002-.401-.425-.7-.736-.896.003.003-.007.171-.007.15l-.009.362-.005.362c-.001.021-.014.142 0 .15M28.382 11.85c-.434.195-.863.407-1.279.642a5.22 5.22 0 0 0-1.192-.824c-.585-.295-1.176-.56-1.694-.966-.028-.022-.066-.051-.107-.085a29.547 29.547 0 0 1 1.68.11c1.254.115 2.51.274 3.742.533l.196.041c-.457.169-.906.353-1.346.55Zm-10.577 3.807.003-.003a.277.277 0 0 1-.003.003Zm14.092-5.008h-.002.002c-.96-.396-2.035-.555-3.057-.708a36.818 36.818 0 0 0-3.507-.363c-.438-.023-.941-.088-1.37.028-.336.09-.49.425-.686.689-.125.169-.26.335-.374.512-.018.028-.036.053-.047.084a.317.317 0 0 0 .002.199c.055.186.206.342.343.472.226.213.484.39.747.552.627.386 1.327.63 1.924 1.067l.08.06-.205.16c-.846.68-1.47 1.579-2.119 2.438-.683.903-1.375 1.834-2.197 2.636-.648.634-1.463 1.289-2.41 1.336-.748.038-1.616-.364-1.928-1.076-.274-.624-.092-1.35.155-1.95.151-.366.34-.717.548-1.054.068-.11.138-.219.21-.326a14.312 14.312 0 0 1 .861-.977c.15-.152.27-.353.398-.525l.276-.375c.035-.05.069-.115.11-.157-.254.257-.493.533-.726.81a26.58 26.58 0 0 0-.953 1.23c-.333.45-.667.9-.96 1.377-.395.64-.767 1.366-.83 2.128-.061.74.283 1.345.937 1.692.852.453 1.765.248 2.54-.26.94-.618 1.685-1.521 2.377-2.395.395-.5.777-1.008 1.162-1.516.32-.424.654-.885 1.028-1.293.47-.515 1.03-.944 1.623-1.315a4.28 4.28 0 0 1-.26.35l1.837.907c.023.011.366-.482.398-.524l.275-.375c.017-.023.119-.138.112-.158-.145-.396-.399-.768-.68-1.094a19.49 19.49 0 0 1 3.582-1.228c.023-.006.12-.155.118-.152l.28-.373.11-.16.276-.373M45.67 11.335a12.128 12.128 0 0 0-.227-1.65c-.04-.2-.08-.4-.124-.599l.045-.116c.012-.034.078-.152.066-.181l-.57-1.418-.046.115c-.017.038-.032.07-.03.063a39.6 39.6 0 0 0-.341.866c-.014.036-.077.147-.066.181.188.601.345 1.214.481 1.829.116.518.214 1.042.277 1.57.044.363.076.736.06 1.105a.556.556 0 0 1-.064.03c-.321.121-.641-.038-.863-.271-.298-.313-.483-.73-.634-1.129a10.923 10.923 0 0 1-.438-1.53c-.028-.126-.054-.251-.08-.377a15.349 15.349 0 0 0-.276-1.815l-.049.125a.993.993 0 0 1-.026.052 39.52 39.52 0 0 0-.341.866c-.018.046-.071.134-.066.182.06.608.157 1.214.276 1.814.07.711.1 1.454-.024 2.16a1.248 1.248 0 0 1-.306.269c-.364.223-.832.213-1.23.093-.952-.288-1.185-1.316-1.174-2.196a7.31 7.31 0 0 1 .178-1.448c.035-.158.073-.315.116-.471l.04-.14.01-.033.007-.022a2.575 2.575 0 0 0-1.051 1.048c-.047.089-.09.18-.132.273-.043.031-.479 1.168-.42 1.088a2.291 2.291 0 0 0-.144.563c-.035.353-.022.707-.067 1.06a6.46 6.46 0 0 1-.069.429.674.674 0 0 1-.28.205c-.278.104-.56-.059-.767-.234-.369-.31-.65-.736-.737-1.214a1.939 1.939 0 0 1-.018-.545 2.38 2.38 0 0 1 .656-.658c.024-.015.074-.175.075-.178.059-.144.116-.288.173-.433.057-.144.114-.288.169-.433.013-.035.04-.165.066-.181-.403.257-.71.676-.914 1.103-.13.273-.234.56-.345.84-.095.242-.198.483-.273.732a2.11 2.11 0 0 0-.086.89c.078.591.484 1.223 1.029 1.49.358.176.672.013.875-.304.2-.314.327-.681.455-1.035l.123-.328a5.71 5.71 0 0 0 .249-.783c.109-.481.152-.972.16-1.464l.002-.05a2.92 2.92 0 0 1 .68-.593c.03-.02.061-.042.094-.056.023-.01.012-.038.017-.018.01.037-.043.145-.053.181a8.482 8.482 0 0 0-.258 1.305c-.085.732-.1 1.596.322 2.237.397.6 1.308.882 1.963.548.285-.146.482-.405.618-.689.033-.071.066-.143.098-.216.07-.136.436-1.063.418-1.069l.044-.124c.022-.061.041-.123.06-.185.03.097.061.195.095.291.152.44.337.897.64 1.257.214.254.525.457.87.365a.635.635 0 0 0 .358-.261c.056-.08.095-.17.132-.26.165-.395.33-.793.47-1.197.145-.421.147-.881.122-1.321M45.59 1.149l-.027.135c-.007.029-.014.051-.015.053a50.214 50.214 0 0 0-.177.914c-.01.053-.042.139-.032.19.562 2.84.88 5.762.96 8.654a30.263 30.263 0 0 1-.104 3.723c.042-.434.209-.857.25-1.293.208-2.165.128-4.354-.059-6.518a61.234 61.234 0 0 0-.342-3.054c.218.335.469.648.744.924-.005-.004-.934-2.832-1.198-3.728"
      fill={color}
    />
    <Path
      d="M45.6 1.413a47.586 47.586 0 0 0-.164.851l-.015.059c-.009.033-.022.085-.018.106.557 2.817.88 5.732.962 8.664.027.972.018 1.866-.029 2.707.02-.094.034-.187.043-.28.18-1.883.162-3.951-.059-6.507a61.143 61.143 0 0 0-.342-3.051l-.04-.291.16.246c.163.25.34.483.532.697a228.72 228.72 0 0 1-1.03-3.201Zm.66 13.412-.131-.013v-.002a30.12 30.12 0 0 0 .104-3.713 52.046 52.046 0 0 0-.96-8.642.394.394 0 0 1 .021-.166 45.645 45.645 0 0 1 .189-.964l.004-.015a1.89 1.89 0 0 0 .011-.04l.078-.399.076.26a189.4 189.4 0 0 0 1.196 3.723l-.059.022-.049.048a5.8 5.8 0 0 1-.594-.704c.123.93.226 1.864.306 2.781.221 2.565.24 4.64.058 6.531a4.724 4.724 0 0 1-.127.657c-.05.208-.102.423-.123.634v.002M34.627 1.94l-.026.134-.015.054a35.62 35.62 0 0 0-.177.914c-.01.052-.042.138-.032.19.561 2.84.88 5.762.96 8.653a30.262 30.262 0 0 1-.104 3.723c.041-.433.208-.857.25-1.292.208-2.166.128-4.355-.059-6.52a60.238 60.238 0 0 0-.343-3.053c.219.335.47.648.744.925-.004-.005-.934-2.832-1.198-3.729"
      fill={color}
    />
    <Path
      d="m34.638 2.203-.078.394c-.027.137-.058.298-.087.457-.003.018-.008.038-.014.059a.361.361 0 0 0-.018.106c.557 2.817.881 5.732.962 8.664.027.972.018 1.867-.028 2.707.018-.093.033-.187.042-.28.18-1.883.162-3.951-.059-6.507a60.724 60.724 0 0 0-.342-3.051l-.04-.291.16.246c.163.25.34.483.531.697a233.418 233.418 0 0 1-1.03-3.201Zm.66 13.412-.131-.013c.108-1.128.142-2.343.105-3.715a52.098 52.098 0 0 0-.96-8.642.389.389 0 0 1 .02-.166c.005-.018.01-.035.012-.049a38.318 38.318 0 0 1 .177-.916l.005-.015.01-.04.078-.398.076.26c.261.885 1.168 3.647 1.196 3.723l-.059.021-.049.049a5.754 5.754 0 0 1-.594-.704c.123.929.226 1.863.306 2.781.221 2.565.24 4.64.058 6.531-.021.223-.075.444-.127.657a4.59 4.59 0 0 0-.123.635M16.409 2.28l-.019.109-.012.043a27.106 27.106 0 0 0-.125.74c-.006.042-.034.113-.021.153a33.58 33.58 0 0 1 1.446 6.813c.104.985.153 1.976.105 2.968.017-.348.16-.696.176-1.046.086-1.736-.117-3.472-.425-5.18a38.87 38.87 0 0 0-.514-2.403c.237.251.504.482.794.683a133.839 133.839 0 0 1-1.405-2.88"
      fill={color}
    />
    <Path
      d="M16.434 2.492a35.364 35.364 0 0 0-.116.69.545.545 0 0 1-.01.05.275.275 0 0 0-.013.073 33.587 33.587 0 0 1 1.448 6.826c.081.77.123 1.48.124 2.15.013-.075.023-.15.027-.224.074-1.508-.061-3.15-.425-5.164a38.997 38.997 0 0 0-.513-2.4l-.06-.244.172.183c.174.185.363.356.563.512a164.476 164.476 0 0 1-1.197-2.452Zm1.414 10.617-.131-.006c.044-.904.01-1.871-.105-2.958a33.463 33.463 0 0 0-1.443-6.8c-.015-.046-.001-.1.01-.146l.01-.037a28.157 28.157 0 0 1 .128-.756l.009-.031.054-.32.089.197a131.52 131.52 0 0 0 1.402 2.875l-.055.03-.04.057a5.063 5.063 0 0 1-.636-.522c.174.726.328 1.457.459 2.177.365 2.026.5 3.676.426 5.194-.009.18-.05.361-.09.536a3 3 0 0 0-.087.51M43.798 3.673l.27-.483s1.2 1.433.195 3.271c0 0 .643-1.674-.465-2.788M43.306 5.002l-.17-.498c.006.016-.132.154-.147.172-.02.024-.152.145-.144.176.051.203.093.41.127.616.057.337.115.703.057 1.044a1 1 0 0 1-.054.186c-.075.196.225-.25.215-.245-.023.011-.04.029-.066.037-.11.038-.216-.02-.288-.1-.216-.24-.275-.633-.325-.939a6.486 6.486 0 0 1-.082-.766l-.291.348c.042.251.061.509.063.764.002.198-.008.4-.05.594a1.216 1.216 0 0 1-.078.251c-.015.033-.034.063-.05.095-.08.152.334-.313.19-.23-.018.01-.033.027-.051.038-.158.097-.377.07-.532-.019-.171-.099-.249-.284-.272-.473-.024-.19 0-.384.038-.57.016-.079.036-.157.058-.234.011-.038.055-.118.05-.158-.003-.035.016-.025-.04.001a.82.82 0 0 0-.22.17c-.21.215-.469.48-.497.793.004-.041.12-.14.148-.173.032-.037.14-.124.144-.175a.716.716 0 0 1 .046-.206c.011-.027.05-.076.053-.104-.001.014-.227.224-.132.163.03-.02.161-.154.203-.14.024.01 0-.013.001.028 0 .046-.038.116-.05.16-.096.332-.192.787.007 1.1a.563.563 0 0 0 .5.245c.179-.008.281-.118.39-.245.145-.173.29-.327.356-.546.055-.183.073-.376.079-.566a4.711 4.711 0 0 0-.063-.911c.004.025-.128.15-.147.172-.027.032-.146.133-.144.176.01.24.037.482.074.72.05.32.107.759.347 1.001.084.084.21.131.32.062.056-.036.1-.102.142-.151.074-.088.16-.175.222-.273.175-.275.098-.718.059-1.02a7.377 7.377 0 0 0-.166-.868l-.291.348.17.498c-.006-.016.132-.154.147-.172.018-.021.153-.15.144-.176M29.508 14.822c.081-.136.26-.344.42-.194.148.139.225.439.173.632.04-.107.082-.214.123-.32l-.01.022.044-.105c-.146.26-.664-.211-.75-.36.012.02-.074.185-.085.212-.027.07-.063.14-.08.213l-.02.066c-.051.174.179-.423.094-.244-.019.04-.037.081-.058.121a2.927 2.927 0 0 1-.416.601c-.547.616-1.308.983-2.098 1.179-.025.006-.075.185-.085.211-.01.027-.056.208-.081.214.745-.184 1.462-.519 2.002-1.075.304-.313.514-.673.673-1.076.054-.137.119-.278.155-.422l-.167.425c.104.182.375.396.584.427.093.014.139-.014.178-.095.063-.129.124-.277.162-.416a.736.736 0 0 0-.162-.626c-.16-.165-.345.042-.43.184-.077.13-.09.297-.166.426ZM20.152 10.042c.437-.031.896-.043 1.327.036.15.027.437.079.428.281-.002.05-.025.092-.044.137a.368.368 0 0 0-.009.015c-.081.14-.002.027.24-.34l.249-.354-.029.035c-.03.032-.061.066-.094.097a2.959 2.959 0 0 1-.422.33c-.331.219-.71.42-1.104.492a.649.649 0 0 0-.086.116 29.128 29.128 0 0 0-.402.571c-.013.02-.064.118-.08.12.387-.07.76-.266 1.086-.48.165-.107.326-.226.465-.366.225-.225.395-.514.575-.773.14-.2.373-.48.047-.62-.27-.116-.602-.116-.892-.121-.228-.004-.458 0-.686.016-.013 0-.093.125-.087.117a29.128 29.128 0 0 0-.401.57c-.012.017-.067.12-.08.12M21.47 5.395s-.269-.39-.427-.195c-.159.195-.427 1.754-.61 1.961 0 0-.45-1.486-.62-1.51-.171-.025-.16.292-.415.085-.256-.207-.268-.56.049-.877.316-.317.95.584 1.01 1.486 0 0 .184-1.852.744-1.828.56.025.439.731.268.878M19.459 17.564s-.016.776-.51.629c-.495-.147-.099-1.473.403-1.788 0 0-.55 1.124-.33 1.26.222.138.437-.101.437-.101ZM23.143 21.658s-.016.776-.51.63c-.495-.148-.099-1.474.403-1.788 0 0-.55 1.123-.33 1.26.221.138.437-.102.437-.102M23.262 3.991l.27-.482s1.2 1.433.195 3.27c0 0 .643-1.673-.465-2.788ZM21.193 14.776l.614-.842.842.614-.614.842-.842-.614ZM28.748 6.107l-.14-.411c.005.013-.108.127-.12.142-.017.02-.125.12-.12.144.11.427.227.927.153 1.366-.01.055-.03.102-.044.154-.003.009-.012.017-.014.026-.008.03.177-.225.188-.225-.013 0-.044.027-.06.031-.091.027-.177-.024-.235-.091-.172-.197-.22-.514-.262-.762a5.421 5.421 0 0 1-.068-.636l-.24.286c.035.208.051.421.053.632.001.17-.007.342-.045.508a.927.927 0 0 1-.067.198c-.006.013-.017.03-.021.043-.028.079.14-.178.157-.179-.02.001-.066.051-.088.061-.333.158-.61-.158-.634-.463-.013-.164.011-.33.048-.49.008-.032.097-.251.081-.274-.02-.03-.22.155-.25.187-.162.176-.354.37-.378.62.003-.035.098-.115.121-.143.026-.031.115-.102.119-.144a.605.605 0 0 1 .036-.165c.011-.029.033-.057.043-.086.036-.105-.191.185-.104.128.024-.016.13-.124.164-.113.017.006-.03.117-.04.154-.079.274-.159.651.007.909a.463.463 0 0 0 .415.199c.15-.008.235-.105.325-.212.11-.13.223-.249.277-.413.051-.153.067-.318.073-.48a3.857 3.857 0 0 0-.052-.763c.004.02-.105.123-.12.142-.023.026-.121.109-.12.144.01.203.032.405.063.605.041.259.09.636.296.824.22.201.431-.13.543-.295.152-.226.09-.59.059-.842a6.048 6.048 0 0 0-.138-.727l-.24.286.14.411c-.005-.013.108-.127.121-.142.015-.017.126-.123.119-.144M24.833 5.878l6.547-2.826c.044-.02.103-.175.127-.217.025-.043.078-.2.123-.22l-6.546 2.826c-.045.02-.103.175-.128.217-.024.043-.077.2-.123.22ZM36.953 4.657 43.5 1.83c.045-.02.104-.174.128-.217.025-.043.078-.2.123-.22L37.205 4.22c-.044.02-.103.175-.127.217-.025.043-.078.2-.124.22M43.672 23.796l6.546-2.826c.045-.02.104-.175.128-.217.024-.043.078-.2.123-.22l-6.546 2.826c-.045.02-.103.175-.128.217-.025.043-.078.2-.123.22ZM76.769 23.796l6.547-2.826c.044-.02.103-.175.127-.217.024-.043.078-.2.123-.22L77.02 23.36c-.045.02-.103.175-.128.217-.025.043-.078.2-.123.22M.454 9.384c.18-.017.364-.021.545-.016.215.007.583.004.734.19.07.086.047.197.008.29-.012.03-.027.056-.04.083-.163.33.605-.785.302-.442a2.582 2.582 0 0 1-.187.189c-.248.228-.555.46-.889.54-.015.005-.076.105-.075.102a25.689 25.689 0 0 0-.349.496c-.012.018-.053.1-.07.105.39-.094.753-.388 1.022-.672.194-.203.348-.445.508-.675.11-.156.286-.351.307-.553.03-.295-.413-.33-.616-.346a4.14 4.14 0 0 0-.707.007c-.011.002-.08.109-.074.102a26.063 26.063 0 0 0-.35.496c-.01.015-.057.103-.07.104M4.008 7.668c.276.172.715.469.735.826l.018-.954-.001.027.004-.07c-.038.291-.38.68-.69.687-.14.003-.225-.1-.253-.229-.007-.028-.007-.057-.012-.086-.006-.178-.01-.041-.01.41-.015.449-.018.586-.008.41.009-.087.02-.175.034-.263.09-.542.256-1.077.44-1.594.012-.036.005-.12.006-.15a32.88 32.88 0 0 0 .015-.724c0-.041-.013-.113 0-.15-.237.666-.462 1.372-.485 2.083-.009.285-.016.571-.016.857 0 .083-.003.17.019.25.047.176.191.244.36.187.205-.068.387-.25.494-.434a.599.599 0 0 0 .086-.248c.031-.316.024-.645.022-.963-.002-.402-.426-.701-.736-.896.003.002-.008.17-.007.15a32.15 32.15 0 0 0-.015.724c0 .02-.013.142 0 .15M4.356 13.53l.614-.842.842.615-.614.842-.842-.615ZM5.929 13.375l.614-.842.842.615-.614.842-.842-.615ZM10.983 5.119l-.14-.41c.005.013-.108.126-.12.142-.017.019-.126.119-.12.144.109.426.227.927.152 1.366-.009.054-.029.101-.044.153-.002.01-.012.017-.014.026-.007.03.178-.224.189-.224-.013 0-.044.026-.06.03-.092.028-.177-.024-.236-.091-.171-.197-.22-.514-.26-.762a5.324 5.324 0 0 1-.069-.636l-.24.287c.035.208.051.42.053.63.001.17-.008.343-.046.51a.949.949 0 0 1-.066.198c-.006.013-.017.029-.022.043-.027.079.142-.178.158-.18-.02.002-.067.052-.088.062-.333.158-.61-.16-.635-.464a1.61 1.61 0 0 1 .049-.489c.007-.033.097-.251.08-.275-.02-.03-.22.155-.249.187-.162.176-.355.371-.379.62.004-.034.099-.115.122-.142.026-.032.114-.102.119-.145a.6.6 0 0 1 .035-.164c.012-.03.034-.057.044-.086.036-.105-.192.185-.105.127.025-.016.13-.124.165-.112.017.006-.03.117-.04.153-.079.275-.16.651.007.91a.465.465 0 0 0 .414.199c.15-.01.235-.105.326-.213.11-.13.222-.249.277-.412a1.7 1.7 0 0 0 .072-.48 3.856 3.856 0 0 0-.05-.764c.003.02-.107.124-.122.142-.022.027-.12.11-.119.145.01.202.031.405.063.605.041.259.089.636.295.824.222.2.432-.13.543-.296.152-.226.092-.589.06-.841a6.099 6.099 0 0 0-.138-.728l-.24.287.14.41c-.005-.013.108-.126.12-.141.015-.018.127-.124.12-.145M3.285 16.44c.191-.47.95-.15 1 .258l-.021-.584c-.008.35-.754.24-.968.258-.093.008-.167.021-.182.118-.03.188.006.422.021.612.02.27.101.536.147.802.039.218.06.436.083.655-.005-.249-.008-.306-.008-.17v.059a4.196 4.196 0 0 1-.071.664c-.036.191.056.405.021.595.107-.574.081-1.17.037-1.75-.033-.434-.13-.854-.208-1.282l-.015-.099c-.039-.232-.106.576.019.473.045-.038.058-.064.129-.077.224-.038.456.012.682-.03.094-.017.216-.042.284-.114.06-.063.052-.136.05-.217-.005-.214.04-.502-.097-.686-.203-.274-.75-.507-.924-.08-.03.07.005.22.007.297.003.077.043.226.014.297M47.105 19.903c.058-.08.174-.205.28-.142.058.033.086.11.105.17.014.041.02.084.028.126.003.012-.001.044.005.054l.011-.203a.585.585 0 0 1-.01.024c-.018.007-.03.041-.056.05-.025.01-.054.001-.08-.006a.575.575 0 0 1-.215-.138c-.028-.024-.17-.192-.174-.19-.017.007-.042.097-.051.115-.038.073-.08.144-.128.211-.15.216-.343.401-.558.552-.387.27-.839.419-1.3.494-.028.004-.001.324-.024.328.732-.119 1.46-.447 1.883-1.081.015-.023.145-.3.159-.301.005 0 .113.147.126.16a.696.696 0 0 0 .245.174c.172.058.172-.121.18-.242.014-.183.041-.384-.057-.55-.102-.172-.257-.055-.346.067-.055.077.03.254-.023.328M77.954 8.519s-.268-.39-.426-.195c-.159.195-.427 1.755-.61 1.962 0 0-.45-1.487-.62-1.511-.172-.024-.159.292-.415.085-.256-.207-.268-.56.049-.877.317-.317.95.585 1.01 1.486 0 0 .183-1.852.744-1.827.56.024.439.73.268.877M48.722 9.454s-.208-.302-.33-.15c-.124.15-.332 1.36-.473 1.521 0 0-.35-1.153-.483-1.172-.132-.019-.123.227-.321.066-.199-.16-.208-.435.038-.68.246-.246.737.453.784 1.153 0 0 .142-1.437.577-1.418.435.019.34.567.208.68M79.91 20.378l.615-.842.842.615-.615.842-.841-.615ZM78.592 20.085c.068.166.181.487.017.628l.254-.2c-.19.11-.367-.227-.433-.363.013.026-.259.165-.258.204a1.03 1.03 0 0 1-.04.34.528.528 0 0 1-.039.097c-.01.017-.026.034-.033.052-.035.082.276-.13.155-.125a.506.506 0 0 1-.307-.055 1.107 1.107 0 0 1-.262-.204c-.061-.06-.127-.152-.213-.18-.145-.048-.335.162-.43.245-.121.104-.135.243-.173.39-.056.215-.164.4-.327.552-.154.145.226-.156.025-.022a3.528 3.528 0 0 1-.514.27 7.424 7.424 0 0 1-1.072.348c-.098.026-.162.18-.258.205a6.664 6.664 0 0 0 1.24-.424c.254-.123.472-.281.691-.458.254-.204.414-.428.49-.745.012-.053.022-.108.041-.16.043-.117.175-.201-.09.004l-.038.029c.183-.116.314.103.435.213.148.134.379.287.57.157.14-.094.3-.204.359-.368.04-.114.053-.244.048-.365l-.258.204c.051.105.115.212.197.295.135.134.219.083.349-.02.135-.106.234-.171.227-.359a1.169 1.169 0 0 0-.094-.389c.01.026-.271.174-.259.204M48.082 11.837c.149-.359.746-.121.776.2l-.016-.452c-.03.28-.579.179-.762.2-.077.01-.117.023-.13.097-.024.136.006.3.014.438.013.195.068.388.104.58.033.18.053.359.074.54.014.124.005-.255-.004-.072-.003.067-.004.134-.01.202a3.137 3.137 0 0 1-.045.338c-.027.149.044.315.017.462.096-.525.07-1.094 0-1.622-.027-.214-.072-.424-.115-.636l-.022-.116c-.043-.21-.04.334.007.314.007-.003.03-.037.041-.044.032-.021.086-.02.122-.021.185-.01.573.062.699-.121.038-.056.026-.129.024-.193-.003-.118.007-.25-.016-.367-.06-.306-.624-.552-.774-.188-.023.055.004.172.006.23.002.06.033.176.01.231M10.563 13.233c-.024.246-.182.772-.073.495a.54.54 0 0 1 .085-.147.522.522 0 0 1 .423-.174c.398.004.79.03 1.189 0l.11-.65a8.682 8.682 0 0 0-.71.5c-.35.27-.755.584-.955.989a.83.83 0 0 0-.069.206c-.042.21-.087.425-.107.638a.79.79 0 0 0 .195.592c.387.405 1.152.107 1.503-.198.315-.273.547-.683.647-1.087.053-.213.058-.437.111-.65a2.308 2.308 0 0 1-.41.835c-.31.402-.882.722-1.404.626a.613.613 0 0 1-.461-.369c-.044-.1-.056-.204-.074-.311-.04-.245-.187.692-.073.438.018-.04.035-.08.057-.12.208-.37.571-.661.901-.918a8.68 8.68 0 0 1 .739-.521c.039-.025.05-.276.058-.324.005-.026.041-.324.053-.325-.2.015-.402.02-.602.021-.18 0-.36-.01-.54-.018a.621.621 0 0 0-.338.06.522.522 0 0 0-.242.336 4.618 4.618 0 0 0-.122.702c-.004.04.012-.05.008-.033.014-.063.024-.13.035-.193.023-.132.053-.266.066-.4M41.74 15.857s-.197-.287-.314-.144c-.116.144-.313 1.29-.448 1.442 0 0-.331-1.092-.456-1.11-.126-.018-.117.215-.305.062-.188-.152-.197-.411.036-.644.233-.233.699.43.743 1.092 0 0 .135-1.361.547-1.343.412.018.322.537.197.645M38.355 15.293a2.577 2.577 0 0 0-.342.577c-.054.13-.105.283-.077.425.037.182.246.3.401.37.156.07.332.084.5.105.161.02.324.01.448-.11.205-.198-.033-.49-.157-.673a6.4 6.4 0 0 0-.47-.606c-.043-.049-.306.006-.327-.045.11.264.14.579.115.86-.062.667-.508 1.174-1.083 1.48-.598.316-1.284.444-1.95.513.104-.011.219.056.325.045.947-.099 2.112-.324 2.715-1.146.295-.403.383-.913.29-1.399a1.571 1.571 0 0 0-.086-.308l-.326-.045c.115.132.225.27.33.41.14.187.34.422.381.66.02.119-.06.209-.159.268-.014.008-.24.09-.24.062-.002-.022.214.056.132.015-.02-.01-.045-.015-.066-.023a.997.997 0 0 1-.158-.078c-.132-.08-.272-.174-.293-.337a.79.79 0 0 1 .075-.382c.085-.211.209-.413.348-.593-.032.04-.291-.09-.326-.045"
      fill={color}
    />
    <Path
      d="M34.733 7.9c.045-.149.091-.297.135-.446.01-.035.066-.156.052-.186L33.867 5.03l-.037.12-.024.063a37.73 37.73 0 0 0-.274.89c-.014.045-.062.14-.053.186.268 1.265.485 2.544.662 3.825.135.98.248 1.966.277 2.956.01.348.01.698-.016 1.045-.353.362-.973.423-1.429.271a2.466 2.466 0 0 1-1.015-.666l-.023.075-.038.108c-.048.148-.094.296-.14.444l-.134.446c-.009.028-.067.166-.053.185.18.243.332.511.465.782.157.32.298.676.349 1.039-.022.02-.045.039-.068.057-.187.146-.407.257-.615.37-.524.281-1.065.53-1.613.76-1.155.483-2.407.952-3.667 1.043-.395.029-.877.033-1.212-.215-.373-.275-.42-.782-.381-1.21.01-.106.025-.213.045-.318.066-.164.135-.325.21-.485.13-.283.269-.565.426-.835.028-.049.046-.134.061-.183a42.342 42.342 0 0 0 .274-.89c.016-.055.024-.137.052-.185-.589 1.014-.943 2.13-1.268 3.252-.149.515-.302 1.119-.129 1.648.145.442.527.632.965.677.583.06 1.186-.06 1.75-.198a16.09 16.09 0 0 0 2.061-.67c.62-.244 1.23-.515 1.822-.82.48-.247 1.033-.492 1.232-1.034l.013-.036c-.03.125-.004.051.078-.221.117-.345.22-.699.313-1.048a1.642 1.642 0 0 0 .052-.564c.46.086.968-.019 1.285-.384.079-.091.13-.203.172-.314.175-.469.325-.96.445-1.447.087-.353.112-.721.121-1.084.026-.996-.076-1.996-.198-2.984a48.194 48.194 0 0 0-.151-1.111l.074.157a1.314 1.314 0 0 1 .061-.183l.139-.444M16.554 13.492l-.001.006.001-.017a.281.281 0 0 1 0 .01Zm-.047.835c0-.037.002-.073.003-.11v.031l-.003.079Zm-1.965 2.315a1.293 1.293 0 0 1-.051.204c.02-.89.104-.527.051-.204Zm2.15-8.825L15.64 5.579a.041.041 0 0 1 .002.01l-.002-.01-.007.137-.008.055a40.25 40.25 0 0 0-.05.93c-.003.059-.019.135-.007.193.263 1.242.476 2.498.652 3.756.136.971.249 1.95.284 2.93l.007.272c-.038.236-.096.484-.23.682-.322.476-1.027.57-1.534.401a2.471 2.471 0 0 1-1.016-.666l-.006.12-.009.072a43.144 43.144 0 0 0-.05.93c-.003.038-.028.164-.007.193.183.247.338.519.472.795.105.217.197.442.262.675-.209.344-.586.542-.947.735-.527.282-1.071.532-1.623.761-.634.264-1.28.5-1.94.692-.57.165-1.159.306-1.753.34-.388.023-.862.016-1.18-.244a.967.967 0 0 1-.308-.505c.192-.791.552-1.566.956-2.262.019-.032.014-.173.015-.192a41.245 41.245 0 0 0 .05-.93c.003-.044-.014-.158.007-.193-.434.746-.803 1.576-.991 2.419-.05.225-.08.454-.098.684-.024-.013-.078 1.059-.06 1.106-.012.252-.011.508.067.748.145.442.527.632.965.677.583.06 1.186-.06 1.75-.198a16.049 16.049 0 0 0 2.061-.67c.62-.244 1.23-.515 1.822-.82.477-.245 1.049-.495 1.234-1.042.049-.142.066-.29.076-.438.032-.442.07-.89.068-1.334a2.11 2.11 0 0 0-.01-.183l.014.006c.522.208 1.201.153 1.591-.296.176-.202.238-.497.28-.754.118-.705.128-1.439.144-2.152.022-.995-.078-1.993-.2-2.979a50.146 50.146 0 0 0-.296-2.034l.535 1.136c-.011-.024.015-.19.015-.192a43.048 43.048 0 0 0 .05-.93c.003-.048.026-.15.007-.193M81.471 13.28a23.348 23.348 0 0 0-.5-2.49l.065-.22c.01-.035.066-.155.052-.186l-.615-1.316-.037.12-.024.063c-.047.147-.093.296-.138.444-.045.149-.091.297-.135.446-.011.04-.064.148-.052.185.547 1.658.977 3.417 1.102 5.16.03.426.04.858-.002 1.283-.077.11-.169.21-.278.29-.409.296-.956.378-1.293-.056a1.716 1.716 0 0 1-.273-.574 2.945 2.945 0 0 1-.06-.25c-.009-.04-.005-.137-.028-.171-.012-.018.003-.027-.009-.03-.01-.001-.079.094-.085.101-.124.143-.254.28-.391.411-.258.246-.695.669-1.093.577-.216-.05-.316-.27-.366-.464-.013-.053-.02-.222-.055-.226-.02-.002-.084.05-.1.06-.306.179-.633.334-.976.428-.352.097-.8.144-1.078-.145-.165-.17-.228-.414-.25-.643-.008-.077.013-.488-.012-.493-.075-.015-.271.1-.341.124-.244.086-.49.169-.735.249a45.99 45.99 0 0 1-6.175 1.53c-3.096.55-6.262.801-9.403.595a27.71 27.71 0 0 1-5.14-.804 22.975 22.975 0 0 1-2.502-.8c-.846-.326-1.641-.73-2.452-1.13-.175-.087-.274-.01-.338.13l.001-.011-.01.032-.007.02a1.474 1.474 0 0 0-.204-.062c-1.051-.236-1.612.867-2.054 1.617-.599 1.016-1.188 2.136-2.175 2.832-.864.61-2.348.872-3.145.006-.59-.639-.598-1.642-.49-2.453.024-.176.055-.365.097-.527.021-.082-.038.102-.025.062-.041.125-.08.25-.118.376-.08.257-.165.514-.233.775-.187.72-.241 1.552-.028 2.269.158.535.509.979 1.043 1.172.672.243 1.476.14 2.106-.176 1.279-.642 1.963-2.04 2.663-3.214.272-.456.56-.978.998-1.297.362-.264.8-.262 1.192-.108.007.149.08.32.12.462.057.193.117.385.185.575.071.197.538 1.428.895.885.13-.198.168-.485.236-.708.073-.236.188-.5.21-.75.55.25 1.109.476 1.678.679 1.153.41 2.339.725 3.541.956 2.332.448 4.718.583 7.088.498a42.754 42.754 0 0 0 6.294-.717 47.299 47.299 0 0 0 4.673-1.118 38.764 38.764 0 0 0 1.884-.606c.075-.027.171-.083.25-.091.007 0 .041-.022.047-.018.026.017-.008.411-.002.476.026.306.13.635.416.79.482.26 1.14-.023 1.584-.243.092-.046.182-.094.272-.145.021-.012.115-.09.14-.084.013.002.09.367.119.427.059.122.15.228.284.264.273.071.568-.133.772-.288.242-.183.46-.4.662-.626.02-.023.113-.165.144-.167.018-.002.013.038.018.073.036.24.1.482.206.701.129.266.338.513.647.552.338.043.717-.143.947-.384.185-.193.292-.437.377-.687-.012.049.008-.011.06-.18.181-.548.377-1.108.447-1.682.096-.78.022-1.58-.088-2.355"
      fill={color}
    />
    <Path
      d="M11.54 10.644c-.444.231-.95.35-1.44.425a7.466 7.466 0 0 1-2.11.024 2.82 2.82 0 0 1 .085-.095 38.816 38.816 0 0 0 .585-.724c.019-.024.124-.128.118-.153a3.036 3.036 0 0 1-.072-.73c.294.004.609.113.858.191.558.174 1.104.39 1.674.525.274.065.553.112.833.124l-.071.065c-.147.136-.281.254-.46.348Zm-8.95 3.079c.102.16.186.35.246.552a2.419 2.419 0 0 1-.475-.809.981.981 0 0 1 .229.257Zm11.493-4.716c-1.24.543-2.56-.104-3.752-.468-.392-.12-.972-.313-1.327-.005a1.573 1.573 0 0 0-.12.117c.033-.167-.97 1.069-.762.947-.028.04-.055.079-.08.12a1.273 1.273 0 0 0-.157.556c-.022.267-.002.547.053.811a5.59 5.59 0 0 1-1.753-.531 4.354 4.354 0 0 1-.428-.248c-.157-.103-.298-.239-.466-.322-.356-.177-.726-.1-1.039.122-.54.38-1.015.821-1.434 1.33-.546.662-1.267 1.384-1.366 2.286v.004a2.231 2.231 0 0 0-.344.589c-.173.46-.19.967-.156 1.452.086 1.242.473 2.454.8 3.648.308 1.126.668 2.316.619 3.495-.01.231-.04.461-.1.685.008-.03.116-.138.124-.147a44.056 44.056 0 0 0 .586-.724c.032-.04.104-.103.117-.153.268-.995.008-2.1-.229-3.074-.286-1.176-.661-2.33-.906-3.515a11.745 11.745 0 0 1-.165-.952c.128.195.284.372.458.523.169.145.375.249.547.062l.024-.026c.1-.055.779-.886.765-.947l.02-.028a.637.637 0 0 0 .078-.138c.046-.117.063-.246.069-.371a2.684 2.684 0 0 0-.133-.946c-.085-.264-.215-.56-.449-.726-.236-.167-.5-.089-.708.085a1.709 1.709 0 0 0-.184.183c.034-.307.14-.607.294-.884l.045-.043c.212-.197.436-.38.67-.55.268-.197.535-.359.883-.306.353.053.61.33.905.508a5.298 5.298 0 0 0 1.81.649c1.11.195 2.334.147 3.404-.23.188-.066.373-.145.543-.25.188-.115.33-.28.498-.422.485-.408 1.044-.73 1.614-1.004.1-.048.201-.095.304-.138.034-.015.113-.133.125-.147a43.925 43.925 0 0 0 .585-.724l.03-.044.088-.109"
      fill={color}
    />
  </Svg>
);

BismillahBackground.defaultProps = {
  size: 24,
  color: Colors.black,
};

export default BismillahBackground;