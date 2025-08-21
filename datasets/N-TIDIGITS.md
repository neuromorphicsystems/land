---
{
    "name": "N-TIDIGITS",
    "aliases": [],
    "year": 2018,
    "modality": [
        "Audio"
    ],
    "sensors": [
        "Dynamic Audio Sensor"
    ],
    "other_sensors": [],
    "category": "Other Modalities",
    "tags": [],
    "description": "Audio Classification",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/s/vfwwrhlyzkax4a2/n-tidigits.hdf5?dl=0",
                "format": "HDF5",
                "available": false
            }
        ],
        "size_gb": 0.421,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Feature Representations for Neuromorphic Audio Spike Streams",
        "doi": "10.3389/fnins.2018.00023",
        "authors": [
            "Jithendar Anumula",
            "Daniel Neil",
            "Tobi Delbruck",
            "Shih-Chii Liu"
        ],
        "abstract": "Event-driven neuromorphic spiking sensors such as the silicon retina and the silicon cochlea encode the external sensory stimuli as asynchronous streams of spikes across different channels or pixels. Combining state-of-art deep neural networks with the asynchronous outputs of these sensors has produced encouraging results on some datasets but remains challenging. While the lack of effective spiking networks to process the spike streams is one reason, the other reason is that the pre-processing methods required to convert the spike streams to frame-based features needed for the deep networks still require further investigation. This work investigates the effectiveness of synchronous and asynchronous frame-based features generated using spike count and constant event binning in combination with the use of a recurrent neural network for solving a classi\ufb01cation task using N-TIDIGITS18 dataset. This spike-based dataset consists of recordings from the Dynamic Audio Sensor, a spiking silicon cochlea sensor, in response to the TIDIGITS audio dataset. We also propose a new pre-processing method which applies an exponential kernel on the output cochlea spikes so that the interspike timing information is better preserved. The results from the N-TIDIGITS18 dataset show that the exponential features perform better than the spike count features, with over 91\\% accuracy on the digit classi\ufb01cation task. This accuracy corresponds to an improvement of at least 2.5\\% over the use of spike count features, establishing a new state of the art for this dataset.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 84,
            "updated": "2025-06-22T13:07:30.459039"
        },
        {
            "source": "scholar",
            "count": 120,
            "updated": "2025-06-22T13:07:29.644326"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.00023/full"
        },
        {
            "type": "project_page",
            "url": "https://docs.google.com/document/d/1Uxe7GsKKXcy6SlDUX4hoJVAC0-UkH-8kr5UXp0Ndi1M/edit#heading=h.6uoqv7p5c2zo"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "23",
        "year": 2018,
        "month": "feb",
        "author": "Anumula, Jithendar and Neil, Daniel and Delbruck, Tobi and Liu, Shih-Chii",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.3389/fnins.2018.00023",
        "url": "http://journal.frontiersin.org/article/10.3389/fnins.2018.00023/full",
        "issn": "1662-453X",
        "volume": "12",
        "title": "Feature {Representations} for {Neuromorphic} {Audio} {Spike} {Streams}",
        "type": "article",
        "key": "anumula_feature_2018"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/BioCAS.2011.6107779",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050394",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/72.279181",
            "source": "crossref"
        },
        {
            "doi": "10.1152/jn.00686.2005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537578",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.887979",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00184",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2015.7280696",
            "source": "crossref"
        },
        {
            "doi": "10.5281/zenodo.27878",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1604850113",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2012.00032",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1143844.1143891",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.123",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00046",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1038/nature14539",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2013.2281834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050403",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605233",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539039",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00178",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2013.71",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2346153",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00682",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00481",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00222",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0165-0270(98)00033-8",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00153",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2016.7418070",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2015.2425886",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00347",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2362542",
            "source": "crossref"
        },
        {
            "title": "Speaker-independent isolated digit recognition using an aer silicon cochlea",
            "source": "crossref"
        },
        {
            "title": "A low power, fully event-based gesture recognition system",
            "source": "crossref"
        },
        {
            "title": "Live demonstration: event-driven real-time spoken digit recognition system",
            "source": "crossref"
        },
        {
            "title": "A dataset for visual navigation with neuromorphic methods",
            "source": "crossref"
        },
        {
            "title": "Learning long-term dependencies with gradient descent is difficult",
            "source": "crossref"
        },
        {
            "title": "A 240 \u00d7 180 10mW 12\u03bcs latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Adaptive exponential integrate-and-fire model as an effective description of neuronal activity",
            "source": "crossref"
        },
        {
            "title": "Exploiting spike-based dynamics in a silicon cochlea for speaker identification",
            "source": "crossref"
        },
        {
            "title": "AER EAR: a matched silicon cochlea pair with address event representation interface",
            "source": "crossref"
        },
        {
            "title": "Learning phrase representations using RNN encoder-decoder for statistical machine translation",
            "source": "crossref"
        },
        {
            "title": "Empirical evaluation of gated recurrent neural networks on sequence modeling",
            "source": "crossref"
        },
        {
            "title": "Skimming digits: neuromorphic classification of spike-encoded images",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Fast-classifying, high-accuracy spiking deep networks through weight and threshold balancing",
            "source": "crossref"
        },
        {
            "title": "Convolutional networks for fast, energy-efficient neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "Comparison between frame-constrained fix-pixel-value and frame-free spiking-dynamic-pixel convnets for visual processing",
            "source": "crossref"
        },
        {
            "title": "Recurrent nets that time and count",
            "source": "crossref"
        },
        {
            "title": "Generating sequences with recurrent neural networks",
            "source": "crossref"
        },
        {
            "title": "Connectionist temporal classification: labelling unsegmented sequence data with recurrent neural networks",
            "source": "crossref"
        },
        {
            "title": "Delving deep into rectifiers: surpassing human-level performance on imagenet classification",
            "source": "crossref"
        },
        {
            "title": "Long short-term memory",
            "source": "crossref"
        },
        {
            "title": "Self-normalizing neural networks",
            "source": "crossref"
        },
        {
            "title": "Spatiotemporal features for asynchronous event-based data",
            "source": "crossref"
        },
        {
            "title": "Hots: a hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "Deep learning",
            "source": "crossref"
        },
        {
            "title": "Binary codes capable of correcting deletions, insertions and reversals",
            "source": "crossref"
        },
        {
            "title": "Real-time speaker identification using the AEREAR2 event-based silicon cochlea",
            "source": "crossref"
        },
        {
            "title": "A 128 \u00d7 128 120 db 15 \u03bcs latency asynchronous temporal contrast vision sensor",
            "source": "crossref"
        },
        {
            "title": "The use of spike-based representations for hardware audition systems",
            "source": "crossref"
        },
        {
            "title": "Asynchronous binaural spatial audition sensor with 2 \u00d7 64 \u00d7 4 channel output",
            "source": "crossref"
        },
        {
            "title": "Live demonstration: convolutional neural network driven by dynamic vision sensor playing RoShamBo",
            "source": "crossref"
        },
        {
            "title": "Steering a predator robot using a mixed frame/event-driven convolutional neural network",
            "source": "crossref"
        },
        {
            "title": "Effective sensor fusion with event-based sensors and deep network architectures",
            "source": "crossref"
        },
        {
            "title": "Phased LSTM: accelerating recurrent network training for long or event-based sequences",
            "source": "crossref"
        },
        {
            "title": "Real-time classification and sensor fusion with a spiking Deep Belief Network",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "Mapping from frame-driven to frame-free event-driven vision systems by low-rate rate coding and coincidence processing\u2013application to feedforward convnets",
            "source": "crossref"
        },
        {
            "title": "Retinomorphic event-based vision sensors: bioinspired cameras with spiking output",
            "source": "crossref"
        },
        {
            "title": "Conversion of continuous-valued deep networks to efficient event-driven networks for image classification",
            "source": "crossref"
        },
        {
            "title": "Deep learning in neural networks: an overview",
            "source": "crossref"
        },
        {
            "title": "Poker-DVS and MNIST-DVS. Their history, how they were made, and other details",
            "source": "crossref"
        },
        {
            "title": "Robustness of spiking Deep Belief Networks to noise and reduced bit precision of neuro-inspired hardware platforms",
            "source": "crossref"
        },
        {
            "title": "Applications of the spike density function in analysis of neuronal firing patterns",
            "source": "crossref"
        },
        {
            "title": "Synthesis of neural networks for spatio-temporal spike pattern recognition and processing",
            "source": "crossref"
        },
        {
            "title": "A 0.5V 55 \u03bcW 64 \u00d7 2-channel binaural silicon cochlea for event-driven stereo-audio sensing",
            "source": "crossref"
        },
        {
            "title": "A Dynamic Vision Sensor with 1% temporal contrast sensitivity and in-pixel asynchronous delta modulator for event encoding",
            "source": "crossref"
        },
        {
            "title": "Reconstruction of audio waveforms from spike trains of artificial cochlea models",
            "source": "crossref"
        },
        {
            "title": "Feedforward categorization on AER motion events using cortex-like features in a spiking neural network",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The root group of the hdf5 file contains two datasets and four further groups.

The two datasets in the root group “/” are

1. train_labels
2. test_labels

The four groups in the root group “/” are

1. train_timestamps
2. train_addresses
3. test_timestamps
4. test_addresses

Each of these four groups holds datasets, which hold either the timestamp or the address sequences which can be accessed by the key values in the train_labels and test_labels datasets.

The train_labels and test_labels contain the key values for the training set and test set respectively. These keys are the dict keys which help access the timestamp and address data, and they also encode the label data.

An example key value in the test_labels dataset is “man-im-a-7557”, which would correspond to the sample “A” of “7-5-5-7” spoken by a man named “IM” in the test dataset. This key value can be used to access the corresponding audio event stream from the groups test_timestamps and the test_addresses which hold the timestamps and the addresses for the event stream respectively. So in order to access the timestamps sequence for the sample “man-im-a-7557”, you look for the dataset with the name “man-im-a-7557” in the test_timestamps group which would hold a single dimensional array of length equal to the number of events N in the sample. Similarly to access the corresponding addresses sequence for the sample, you look for the dataset with the same name in the test_addresses group which would hold a single dimensional array of the same length N.\*\*
