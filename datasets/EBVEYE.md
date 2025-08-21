---
{
    "name": "EBVEYE",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Eye Tracking",
        "Gaze Tracking",
        "Blink Detection"
    ],
    "description": "Gaze Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://github.com/aangelopoulos/event_based_gaze_tracking/blob/master/setup.sh",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 43.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Near-Eye Gaze Tracking Beyond 10,000 Hz",
        "doi": "10.1109/TVCG.2021.3067784",
        "authors": [
            "Anastasios N. Angelopoulos",
            "Julien N.P. Martel",
            "Amit P. Kohli",
            "Jorg Conradt",
            "Gordon Wetzstein"
        ],
        "abstract": "The cameras in modern gaze-tracking systems suffer from fundamental bandwidth and power limitations, constraining data acquisition speed to 300 Hz realistically. This obstructs the use of mobile eye trackers to perform, e.g., low latency predictive rendering, or to study quick and subtle eye motions like microsaccades using head-mounted devices in the wild. Here, we propose a hybrid frame-event-based near-eye gaze tracking system offering update rates beyond 10,000 Hz with an accuracy that matches that of high-end desktop-mounted commercial trackers when evaluated in the same conditions. Our system, previewed in Figure 1, builds on emerging event cameras that simultaneously acquire regularly sampled frames and adaptively sampled events. We develop an online 2D pupil fitting method that updates a parametric model every one or few events. Moreover, we propose a polynomial regressor for estimating the point of gaze from the parametric pupil model in real time. Using the first event-based gaze dataset, we demonstrate that our system achieves accuracies of 0.45\u00b0-1.75\u00b0 for fields of view from 45\u00b0 to 98\u00b0. With this technology, we hope to enable a new generation of ultra-low-latency gaze-contingent rendering and display techniques for virtual and augmented reality.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 81,
            "updated": "2025-07-14T08:00:47.238160"
        },
        {
            "source": "scholar",
            "count": 153,
            "updated": "2025-07-14T08:00:46.881520"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "http://arxiv.org/abs/2004.03577"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9389490"
        },
        {
            "type": "github_page",
            "url": "https://github.com/aangelopoulos/event_based_gaze_tracking"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "optics_lens": "25 mm f/1.4 VIS-NIR C-mount lenses (EO-#67-715)",
        "optics_filter": "UV/VIS cut-off filters (EO-#89-834)",
        "num_subjects": "27",
        "stereo": true
    },
    "bibtex": {
        "pages": "2577--2586",
        "year": 2021,
        "month": "may",
        "author": "Angelopoulos, Anastasios N. and Martel, Julien N.P. and Kohli, Amit P. and Conradt, Jorg and Wetzstein, Gordon",
        "journal": "IEEE Transactions on Visualization and Computer Graphics",
        "urldate": "2024-12-07",
        "number": "5",
        "language": "en",
        "doi": "10.1109/TVCG.2021.3067784",
        "url": "https://ieeexplore.ieee.org/document/9389490/",
        "issn": "1077-2626, 1941-0506, 2160-9306",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "27",
        "title": "Event-{Based} {Near}-{Eye} {Gaze} {Tracking} {Beyond} 10,000 {Hz}",
        "type": "article",
        "key": "angelopoulos_event-based_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2012.6467270",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3173574.3173655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.239",
            "source": "crossref"
        },
        {
            "doi": "10.1111/cgf.13654",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patrec.2010.02.013",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914554813",
            "source": "crossref"
        },
        {
            "doi": "10.1076/vimr.1.3.131.4438",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.114",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2857491.2857492",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2014.6906882",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.428",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3290605.3300780",
            "source": "crossref"
        },
        {
            "doi": "10.3758/BF03201553",
            "source": "crossref"
        },
        {
            "doi": "10.1167/19.10.218c",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2778103",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3361330",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2366145.2366183",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2004.07.013",
            "source": "crossref"
        },
        {
            "doi": "10.1137/1031049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2018.00290",
            "source": "crossref"
        },
        {
            "doi": "10.1889/JSID17.3.175",
            "source": "crossref"
        },
        {
            "doi": "10.1016/B0-12-227210-2/00215-6",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1344471.1344494",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AFGR.2000.840620",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.235",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3204493.3204578",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/72.217194",
            "source": "crossref"
        },
        {
            "doi": "10.3928/1081597X-20091119-01",
            "source": "crossref"
        },
        {
            "doi": "10.7717/peerj.7086",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-23192-1_4",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2857491.2857505",
            "source": "crossref"
        },
        {
            "doi": "10.1037/0096-1523.15.3.529",
            "source": "crossref"
        },
        {
            "doi": "10.1364/JOSA.63.000921",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2018.2868532",
            "source": "crossref"
        },
        {
            "doi": "10.1126/sciadv.aav6187",
            "source": "crossref"
        },
        {
            "doi": "10.1364/AO.24.000527",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2004.07.010",
            "source": "crossref"
        },
        {
            "doi": "10.3928/1081597X-20101215-03",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2018.8351411",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-1-4615-2724-4_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0893-6080(88)90024-X",
            "source": "crossref"
        },
        {
            "title": "Optical gaze tracking with spatially-sparse single-pixel detectors",
            "source": "crossref"
        },
        {
            "title": "Monocular free-head 3d gaze tracking with deep learning and geometry constraints",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Post-render warp with late input sampling improves aiming under high latency conditions",
            "source": "crossref"
        },
        {
            "title": "Datasheet",
            "source": "crossref"
        },
        {
            "title": "Dual-state parametric eye tracking",
            "source": "crossref"
        },
        {
            "title": "Activitydriven, event-based vision sensors",
            "source": "crossref"
        },
        {
            "title": "Eye tracking methodology",
            "source": "crossref"
        },
        {
            "title": "Non-intrusive gaze tracking using artificial neural networks",
            "source": "crossref"
        },
        {
            "title": "Gaze-sensing leds for head mounted displays",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset was recorded with 2 DAVIS346 sensors, one for each eye. Each camera had 25 mm f/1.4 VIS-NIR C-mount lenses (EO-#67-715) lens and a UV/VIS cut-off filters (EO-#89-834)filter. Both cameras were synchronised and recorded both frames and events. The dataset contains data from 27 people and contains data from two different eye experiments; random saccades and smooth pursuit.
