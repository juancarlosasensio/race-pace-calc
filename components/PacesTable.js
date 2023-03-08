import { React, ReactDOM, html } from "../deps.js";

export const PacesTable = () => {
  return html`
    <div className="col-md-5 text-center">
       Hello
    </div>
  `
}

{/* <table class="table table-condensed">
<thead>
<tr>
<th>Dist (mi)</th>
<th class="text-right">6:00<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">6:30<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">7:00<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">7:30<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">8:00<abbr title="minutes per mile">/mi</abbr></th>
</tr>
</thead>
<tbody>
<tr class="" style="animation-delay: 0ms">
<td>
1
</td>
<td class="text-right">
6:00
</td>
<td class="text-right">
6:30
</td>
<td class="text-right">
7:00
</td>
<td class="text-right">
7:30
</td>
<td class="text-right">
8:00
</td>
</tr>
<tr class="" style="animation-delay: 33ms">
<td>
2
</td>
<td class="text-right">
12:00
</td>
<td class="text-right">
13:00
</td>
<td class="text-right">
14:00
</td>
<td class="text-right">
15:00
</td>
<td class="text-right">
16:00
</td>
</tr>
<tr class="" style="animation-delay: 66ms">
<td>
3
</td>
<td class="text-right">
18:00
</td>
<td class="text-right">
19:30
</td>
<td class="text-right">
21:00
</td>
<td class="text-right">
22:30
</td>
<td class="text-right">
24:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 99ms">
<td>
<strong>5k</strong>
</td>
<td class="text-right">
18:38
</td>
<td class="text-right">
20:12
</td>
<td class="text-right">
21:45
</td>
<td class="text-right">
23:18
</td>
<td class="text-right">
24:51
</td>
</tr>
<tr class="" style="animation-delay: 132ms">
<td>
4
</td>
<td class="text-right">
24:00
</td>
<td class="text-right">
26:00
</td>
<td class="text-right">
28:00
</td>
<td class="text-right">
30:00
</td>
<td class="text-right">
32:00
</td>
</tr>
<tr class="" style="animation-delay: 165ms">
<td>
5
</td>
<td class="text-right">
30:00
</td>
<td class="text-right">
32:30
</td>
<td class="text-right">
35:00
</td>
<td class="text-right">
37:30
</td>
<td class="text-right">
40:00
</td>
</tr>
<tr class="" style="animation-delay: 198ms">
<td>
6
</td>
<td class="text-right">
36:00
</td>
<td class="text-right">
39:00
</td>
<td class="text-right">
42:00
</td>
<td class="text-right">
45:00
</td>
<td class="text-right">
48:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 231ms">
<td>
<strong>10k</strong>
</td>
<td class="text-right">
37:17
</td>
<td class="text-right">
40:23
</td>
<td class="text-right">
43:30
</td>
<td class="text-right">
46:36
</td>
<td class="text-right">
49:43
</td>
</tr>
<tr class="" style="animation-delay: 264ms">
<td>
7
</td>
<td class="text-right">
42:00
</td>
<td class="text-right">
45:30
</td>
<td class="text-right">
49:00
</td>
<td class="text-right">
52:30
</td>
<td class="text-right">
56:00
</td>
</tr>
<tr class="" style="animation-delay: 297ms">
<td>
8
</td>
<td class="text-right">
48:00
</td>
<td class="text-right">
52:00
</td>
<td class="text-right">
56:00
</td>
<td class="text-right">
1:00:00
</td>
<td class="text-right">
1:04:00
</td>
</tr>
<tr class="" style="animation-delay: 330ms">
<td>
9
</td>
<td class="text-right">
54:00
</td>
<td class="text-right">
58:30
</td>
<td class="text-right">
1:03:00
</td>
<td class="text-right">
1:07:30
</td>
<td class="text-right">
1:12:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 363ms">
<td>
<strong>10 mi</strong>
</td>
<td class="text-right">
1:00:00
</td>
<td class="text-right">
1:05:00
</td>
<td class="text-right">
1:10:00
</td>
<td class="text-right">
1:15:00
</td>
<td class="text-right">
1:20:00
</td>
</tr>
<tr class="" style="animation-delay: 396ms">
<td>
11
</td>
<td class="text-right">
1:06:00
</td>
<td class="text-right">
1:11:30
</td>
<td class="text-right">
1:17:00
</td>
<td class="text-right">
1:22:30
</td>
<td class="text-right">
1:28:00
</td>
</tr>
<tr class="" style="animation-delay: 429ms">
<td>
12
</td>
<td class="text-right">
1:12:00
</td>
<td class="text-right">
1:18:00
</td>
<td class="text-right">
1:24:00
</td>
<td class="text-right">
1:30:00
</td>
<td class="text-right">
1:36:00
</td>
</tr>
<tr class="" style="animation-delay: 462ms">
<td>
13
</td>
<td class="text-right">
1:18:00
</td>
<td class="text-right">
1:24:30
</td>
<td class="text-right">
1:31:00
</td>
<td class="text-right">
1:37:30
</td>
<td class="text-right">
1:44:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 495ms">
<td>
<strong>1/2 Marathon</strong>
</td>
<td class="text-right">
1:18:39
</td>
<td class="text-right">
1:25:13
</td>
<td class="text-right">
1:31:46
</td>
<td class="text-right">
1:38:19
</td>
<td class="text-right">
1:44:53
</td>
</tr>
<tr class="" style="animation-delay: 528ms">
<td>
14
</td>
<td class="text-right">
1:24:00
</td>
<td class="text-right">
1:31:00
</td>
<td class="text-right">
1:38:00
</td>
<td class="text-right">
1:45:00
</td>
<td class="text-right">
1:52:00
</td>
</tr>
<tr class="" style="animation-delay: 561ms">
<td>
15
</td>
<td class="text-right">
1:30:00
</td>
<td class="text-right">
1:37:30
</td>
<td class="text-right">
1:45:00
</td>
<td class="text-right">
1:52:30
</td>
<td class="text-right">
2:00:00
</td>
</tr>
<tr class="" style="animation-delay: 594ms">
<td>
16
</td>
<td class="text-right">
1:36:00
</td>
<td class="text-right">
1:44:00
</td>
<td class="text-right">
1:52:00
</td>
<td class="text-right">
2:00:00
</td>
<td class="text-right">
2:08:00
</td>
</tr>
<tr class="" style="animation-delay: 627ms">
<td>
17
</td>
<td class="text-right">
1:42:00
</td>
<td class="text-right">
1:50:30
</td>
<td class="text-right">
1:59:00
</td>
<td class="text-right">
2:07:30
</td>
<td class="text-right">
2:16:00
</td>
</tr>
<tr class="" style="animation-delay: 660ms">
<td>
18
</td>
<td class="text-right">
1:48:00
</td>
<td class="text-right">
1:57:00
</td>
<td class="text-right">
2:06:00
</td>
<td class="text-right">
2:15:00
</td>
<td class="text-right">
2:24:00
</td>
</tr>
<tr class="" style="animation-delay: 693ms">
<td>
19
</td>
<td class="text-right">
1:54:00
</td>
<td class="text-right">
2:03:30
</td>
<td class="text-right">
2:13:00
</td>
<td class="text-right">
2:22:30
</td>
<td class="text-right">
2:32:00
</td>
</tr>
<tr class="" style="animation-delay: 726ms">
<td>
20
</td>
<td class="text-right">
2:00:00
</td>
<td class="text-right">
2:10:00
</td>
<td class="text-right">
2:20:00
</td>
<td class="text-right">
2:30:00
</td>
<td class="text-right">
2:40:00
</td>
</tr>
<tr class="" style="animation-delay: 759ms">
<td>
21
</td>
<td class="text-right">
2:06:00
</td>
<td class="text-right">
2:16:30
</td>
<td class="text-right">
2:27:00
</td>
<td class="text-right">
2:37:30
</td>
<td class="text-right">
2:48:00
</td>
</tr>
<tr class="" style="animation-delay: 792ms">
<td>
22
</td>
<td class="text-right">
2:12:00
</td>
<td class="text-right">
2:23:00
</td>
<td class="text-right">
2:34:00
</td>
<td class="text-right">
2:45:00
</td>
<td class="text-right">
2:56:00
</td>
</tr>
<tr class="" style="animation-delay: 825ms">
<td>
23
</td>
<td class="text-right">
2:18:00
</td>
<td class="text-right">
2:29:30
</td>
<td class="text-right">
2:41:00
</td>
<td class="text-right">
2:52:30
</td>
<td class="text-right">
3:04:00
</td>
</tr>
<tr class="" style="animation-delay: 858ms">
<td>
24
</td>
<td class="text-right">
2:24:00
</td>
<td class="text-right">
2:36:00
</td>
<td class="text-right">
2:48:00
</td>
<td class="text-right">
3:00:00
</td>
<td class="text-right">
3:12:00
</td>
</tr>
<tr class="" style="animation-delay: 891ms">
<td>
25
</td>
<td class="text-right">
2:30:00
</td>
<td class="text-right">
2:42:30
</td>
<td class="text-right">
2:55:00
</td>
<td class="text-right">
3:07:30
</td>
<td class="text-right">
3:20:00
</td>
</tr>
<tr class="" style="animation-delay: 924ms">
<td>
26
</td>
<td class="text-right">
2:36:00
</td>
<td class="text-right">
2:49:00
</td>
<td class="text-right">
3:02:00
</td>
<td class="text-right">
3:15:00
</td>
<td class="text-right">
3:28:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 957ms">
<td>
<strong>Marathon</strong>
</td>
<td class="text-right">
2:37:19
</td>
<td class="text-right">
2:50:25
</td>
<td class="text-right">
3:03:32
</td>
<td class="text-right">
3:16:38
</td>
<td class="text-right">
3:29:45
</td>
</tr>
<tr class="" style="animation-delay: 990ms">
<td>
27
</td>
<td class="text-right">
2:42:00
</td>
<td class="text-right">
2:55:30
</td>
<td class="text-right">
3:09:00
</td>
<td class="text-right">
3:22:30
</td>
<td class="text-right">
3:36:00
</td>
</tr>
<tr class="" style="animation-delay: 1023ms">
<td>
28
</td>
<td class="text-right">
2:48:00
</td>
<td class="text-right">
3:02:00
</td>
<td class="text-right">
3:16:00
</td>
<td class="text-right">
3:30:00
</td>
<td class="text-right">
3:44:00
</td>
</tr>
<tr class="" style="animation-delay: 1056ms">
<td>
29
</td>
<td class="text-right">
2:54:00
</td>
<td class="text-right">
3:08:30
</td>
<td class="text-right">
3:23:00
</td>
<td class="text-right">
3:37:30
</td>
<td class="text-right">
3:52:00
</td>
</tr>
<tr class="" style="animation-delay: 1089ms">
<td>
30
</td>
<td class="text-right">
3:00:00
</td>
<td class="text-right">
3:15:00
</td>
<td class="text-right">
3:30:00
</td>
<td class="text-right">
3:45:00
</td>
<td class="text-right">
4:00:00
</td>
</tr>
<tr class="" style="animation-delay: 1122ms">
<td>
31
</td>
<td class="text-right">
3:06:00
</td>
<td class="text-right">
3:21:30
</td>
<td class="text-right">
3:37:00
</td>
<td class="text-right">
3:52:30
</td>
<td class="text-right">
4:08:00
</td>
</tr>
<tr class="highlighted" style="animation-delay: 1155ms">
<td>
<strong>50k</strong>
</td>
<td class="text-right">
3:06:25
</td>
<td class="text-right">
3:21:57
</td>
<td class="text-right">
3:37:29
</td>
<td class="text-right">
3:53:01
</td>
<td class="text-right">
4:08:33
</td>
</tr>
</tbody>
<tfoot>
<tr>
<th>Dist (mi)</th>
<th class="text-right">6:00<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">6:30<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">7:00<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">7:30<abbr title="minutes per mile">/mi</abbr></th>
<th class="text-right">8:00<abbr title="minutes per mile">/mi</abbr></th>
</tr>
</tfoot>
</table> */}