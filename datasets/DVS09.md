---
{
    "name": "DVS09",
    "aliases": [],
    "year": 2018,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Sample Data"
    ],
    "task": "DVS Sample Data",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "Sample dataset files",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/open?id=0BzvXOhBHjRhecFYzN3Q3ZlF2WVU",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 0.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A 3.6 $\\mu$s Latency Asynchronous Frame-Free Event-Driven Dynamic-Vision-Sensor",
        "doi": "10.1109/jssc.2011.2118490",
        "authors": [
            "Juan Antonio Lenero-Bardallo",
            "Teresa Serrano-Gotarredona",
            "Bernab\u00e9 Linares-Barranco"
        ],
        "abstract": "Conventional image sensors produce massive amounts of redundant data and are limited in temporal resolution by the frame rate. This paper reviews our recent breakthrough in the development of a high-performance spike-event based dynamic vision sensor (DVS) that discards the frame concept entirely, and then describes novel digital methods for efficient low-level filtering and feature extraction and high-level object tracking that are based on the DVS spike events. These methods filter events, label them, or use them for object tracking. Filtering reduces the number of events but improves the ratio of informative events. Labeling attaches additional interpretation to the events, e.g. orientation or local optical flow. Tracking uses the events to track moving objects. Processing occurs on an event-by-event basis and uses the event time and identity as the basis for computation. A common memory object for filtering and labeling is a spatial map of most recent past event times. Processing methods typically use these past event times together with the present event in integer branching logic to filter, label, or synthesize new events. These methods are straightforwardly computed on serial digital hardware, resulting in a new event-and timing-based approach for visual computation that efficiently integrates a neural style of computation with digital hardware. All code is open-sourced in the jAER project (jaer.wiki.sourceforge.net).",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 161,
            "updated": "2025-07-07T09:07:09.514239"
        },
        {
            "source": "scholar",
            "count": 252,
            "updated": "2025-07-07T09:07:09.046090"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.zora.uzh.ch/id/eprint/17620/"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/16b4H78f4vG_QvYDK2Tq0sNBA-y7UFnRbNnsGbD1jJOg/edit#heading=h.d6xhhyjtb0d9"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "year": 2008,
        "author": "Delbruck, Tobi",
        "language": "en",
        "doi": "10.5167/uzh-17620",
        "title": "Frame-free dynamic digital vision",
        "type": "article",
        "key": "delbruck_frame-free_2008"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2003.814415",
            "source": "crossref"
        },
        {
            "doi": "10.1023/B:ALOG.0000011162.52504.39",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF01239381",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10470-009-9354-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2009.2017000",
            "source": "crossref"
        },
        {
            "doi": "10.1109/82.842110",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.883843",
            "source": "crossref"
        },
        {
            "doi": "10.1109/81.802845",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVLSI.2007.893624",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2005.1465196",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICECS.2004.1399651",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2002.807270",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBME.2003.821039",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBME.2003.821040",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2003.822777",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.905295",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.909328",
            "source": "crossref"
        },
        {
            "doi": "10.1109/72.217193",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2009.2030591",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2003.819169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2002.807412",
            "source": "crossref"
        },
        {
            "doi": "10.1007/11957959_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/4.982422",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2009.2031768",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CAMP.1997.631903",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2004.838307",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2002.807304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2007.900179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2005.1494019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2010.2046971",
            "source": "crossref"
        },
        {
            "title": "The stochastic I-Pot: A circuit building block for programming bias currents",
            "source": "crossref"
        },
        {
            "title": "A time-to-first-spike CMOS imager",
            "source": "crossref"
        },
        {
            "title": "A 128 <ref_formula><tex Notation=\"TeX\">$\\times$</tex> </ref_formula> 128 120 dB 30 mW asynchronous vision sensor that responds to relative intensity change",
            "source": "crossref"
        },
        {
            "title": "A QVGA 143 dB dynamic range asynchronous address-event PWM dynamic image sensor with lossless pixel level video-compression",
            "source": "crossref"
        },
        {
            "title": "A 128 <ref_formula> <tex Notation=\"TeX\">$\\times$</tex></ref_formula> 128 pixel 120-dB dynamic-range vision sensor chip for image contrast and orientation extraction",
            "source": "crossref"
        },
        {
            "title": "A contrast-sensitive retina with reciprocal synapses",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

This event camera dataset is from the first practical event camera, the DVS128 from the Sensors Group.
