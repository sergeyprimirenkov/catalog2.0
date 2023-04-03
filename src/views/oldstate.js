import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    games: [],
    wishlistIds: [],
    backgrounds: [],
    search: ""
  },
  plugins: [createPersistedState()],
  getters: {
    showGenres: state => selectedPlatform => {
      const filteredGames = state.games.filter(game => {
        return game.category == selectedPlatform;
      });
      const result = filteredGames.reduce((arr, { genre }) => {
        if (!arr.includes(genre)) {
          arr.push(genre);
        }
        return arr;
      }, []);
      return result;
    },
    // showGames: state => (
    //   query,
    //   platform,
    //   genre,
    //   isChild,
    //   isVeryChild,
    //   isLocalMultiplayer,
    //   selectedSort
    // ) => {
    //   if (genre === "все" && isChild) {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isChild &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все" && isVeryChild) {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isVeryChild &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все") {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (isChild) {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isChild &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (isVeryChild) {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isVeryChild &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все" && isChild && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         isChild &&
    //         game.isLocalMultiplayer &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //   } else if (genre === "все" && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isLocalMultiplayer &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //   } else if (isChild && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === "ps5" &&
    //         isChild &&
    //         game.isLocalMultiplayer &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //   } else if (isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === "ps5" &&
    //         game.isLocalMultiplayer &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //   } else {
    //     let filteredGames = [];
    //     let tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query.toLowerCase())
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   }
    // },
    showHTCGames: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      if (genre === "все" && isChild) {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.isChild &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      } else if (genre === "все" && isVeryChild) {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.isVeryChild &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      } else if (genre === "все") {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      } else if (isChild) {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.isChild &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      } else if (isVeryChild) {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.isVeryChild &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      } else {
        let filteredGames = [];
        let tmpArray = state.games.filter(game => {
          return (
            game.category === "htc" &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
        if (selectedSort == "ascending") {
          filteredGames = tmpArray.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (selectedSort == "descending") {
          filteredGames = tmpArray.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        } else {
          filteredGames = tmpArray;
        }
        return filteredGames;
      }
    },
    showPSVRGames: state => (query, genre, isChild, isVeryChild) => {
      if (genre === "все" && isChild) {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.isChild &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (genre === "все" && isVeryChild) {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.isVeryChild &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (genre === "все") {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (isChild) {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.isChild &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (isVeryChild) {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.isVeryChild &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else {
        return state.games.filter(game => {
          return (
            game.category === "psvr" &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      }
    },
    showPS5Games: state => (query, genre, isChild, isLocalMultiplayer) => {
      if (genre === "все" && isChild && isLocalMultiplayer) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            isChild &&
            game.isLocalMultiplayer &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (genre === "все" && isChild) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.isChild &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (genre === "все" && isLocalMultiplayer) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.isLocalMultiplayer &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (genre === "все") {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (isChild) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.isChild &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (isLocalMultiplayer) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.isLocalMultiplayer &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else if (isChild && isLocalMultiplayer) {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            isChild &&
            game.isLocalMultiplayer &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      } else {
        return state.games.filter(game => {
          return (
            game.category === "ps5" &&
            game.genre === genre &&
            game.title.toLowerCase().includes(query.toLowerCase())
          );
        });
      }
    },
    showLikedGames: state => query => {
      return state.wishlist.filter(game => {
        return game.title.toLowerCase().includes(query.toLowerCase());
      });
    },
    wishlist: state => query => {
      return state.games.filter(game => {
        return (
          state.wishlistIds.includes(game.id) &&
          game.title.toLowerCase().includes(query.toLowerCase())
        );
      });
    },
    getGameById: state => id => {
      return state.games.find(game => {
        return game.id === id;
      });
    },
    showBackgrounds: state => theme => {
      if (theme === "все") {
        return state.backgrounds;
      } else {
        return state.backgrounds.filter(back => {
          return back.theme === theme;
        });
      }
    }
  },
  actions: {
    loadGames({ commit }) {
      axios
        .get("games.json")
        .then(r => r.data.games)
        .then(games => {
          commit("SET_GAMES", games);
        });
    },
    loadBackgrounds({ commit }) {
      axios
        .get("backgrounds.json")
        .then(r => r.data.backgrounds)
        .then(backgrounds => {
          commit("SET_BACKGROUNDS", backgrounds);
        });
    }
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_BACKGROUNDS(state, backgrounds) {
      state.backgrounds = backgrounds;
    },
    addGame(state, gameId) {
      if (!state.wishlistIds.includes(gameId)) {
        state.wishlistIds.push(gameId);
      }
    },
    removeGame(state, gameId) {
      const index = state.wishlistIds.indexOf(gameId);
      if (index !== -1) {
        state.wishlistIds.splice(index, 1);
      }
    }
  }
});
